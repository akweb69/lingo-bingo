import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Authantication";
import { toast } from "react-toastify";
export const ContextData = createContext();


const ContextProviderData = ({ children }) => {
    const [registerData, setRegisterData] = useState({});
    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState('');
    const [loading, setLoading] = useState(true);
    const [resetEmail1, setResetEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [exist, setExist] = [""];
    console.log(name, photo);
    console.log(user);
    // ! signin with google
    const Provider = new GoogleAuthProvider();
    const creatUserWithGoogle = () => {

        signInWithPopup(auth, Provider)
            .then(result => {
                const newUser = result.user;
                setUser(newUser);
                setSuccess(true);
            })
            .catch(() => {
                setExist("Your Email Allready Exist!")
            })
    }
    // ! creat account
    const createUser = (email, password, name, photo) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const userData = result.user;
                setUser(userData);

                // Update profile
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        setSuccess(true)
                    })
                    .catch(() => {
                        setExist("Your Email Allready Exist!")

                    });
            })
            .catch(() => {
                setExist("Your Email Allready Exist!")

            });

    };
    // ! update user 
    const updateUserInfo = (name, photo) => {
        setLoading(true)
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                console.log("Profile updated successfully!");
            })
            .catch((error) => {
                console.error("Error updating profile:", error.message);
            });

        setInterval(() => {
            setLoading(false)
        }, 3000);

    }

    // ! signIn User
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    // ! signOut user 
    const signOutUser = () => {
        signOut(auth)

    }
    // ! Rest Password Email 
    const handleResetPassword = (resetEmail) => {
        sendPasswordResetEmail(auth, resetEmail)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })

    }
    const dataObj = {
        registerData,
        setRegisterData,
        user,
        setUser,
        creatUserWithGoogle,
        createUser,
        signInUser,
        signOutUser,
        setName,
        setPhoto,
        handleResetPassword,
        loading,
        setResetEmail,
        resetEmail1,
        updateUserInfo,
        setSuccess,
        success,
        exist,
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <ContextData.Provider value={dataObj}>
            {
                children
            }
        </ContextData.Provider>
    );
};

export default ContextProviderData;