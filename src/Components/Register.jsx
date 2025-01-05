import React, { useContext, useState } from 'react';
import singupimg from "../assets/img/Sign up-rafiki (1).png"
import { Link, useNavigate } from 'react-router-dom';
import { ContextData } from '../DataProvider/ContextProviderData';
import { toast, ToastContainer } from 'react-toastify';
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Helmet } from 'react-helmet';




const Register = () => {

    const { exist, success, creatUserWithGoogle, setSuccess, createUser } = useContext(ContextData);
    const [eye, setEye] = useState(true);
    const navigate = useNavigate();
    console.log(exist)
    const [err, setErr] = useState("");
    if (success) {
        toast.error("Register Successfull !")
        navigate("/")
    }

    const handleSubmitBtn = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        // ! validation password
        const numericRegex = /\d/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>[\]\\'`;~\-_=+/]/;

        setErr("");

        if (password.length < 6) {
            setErr("Password must be 6 character!")
            return;
        }
        if (!numericRegex.test(password)) {
            setErr("Password must have at least one number (0-9)")
            return;
        }
        if (!uppercaseRegex.test(password)) {
            setErr("Password must have at least one Uppercase character!")
            return;
        }
        if (!lowercaseRegex.test(password)) {
            setErr("Password must have at least one lowercase character!")
            return;
        }
        if (!specialCharRegex.test(password)) {
            setErr("Password must have at least one Special character!")
            return;
        }
        // setRegisterData(registerData);
        createUser(email, password, name, photo)
            .then(() => {
                setSuccess(true)
            })
            .catch(() => setErr(" Your Email allready exists"));




    }
    // !

    // ! eye toggling
    const handleEyeBtn = () => {
        setEye(!eye);
    }


    return (
        <div className='w-full min-h-screen flex justify-center items-center pt-20'>
            <Helmet>
                <title>Register | Lingo-Bingp</title>
            </Helmet>
            <ToastContainer></ToastContainer>
            <div className="grid w-11/12 mx-auto md:grid-cols-12 justify-center">
                <div className="col-span-6  py-5 flex justify-center items-center ">
                    <div className="md:w-10/12 mx-auto">
                        <form onSubmit={handleSubmitBtn} className="card-body w-full text-[rgb(0,0,31)] md:p-10 shadow-md shadow-purple-800 bg-[rgb(0,0,44)] rounded-xl">
                            <h1 className=" text-white font-bold text-2xl md:text-4xl  py-4 text-center">Register Your Account</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Your Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text text-white">Photo URL</span>
                                </label>
                                <input name='photo' type="text" placeholder="URL" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text text-white">Your Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Set Password</span>
                                </label>
                                <div className="w-full relative">

                                    <input name='password' type={`${eye ? "password" : "text"}`} placeholder="Password" className="input input-bordered w-full" required />
                                    <div onClick={handleEyeBtn} className="absolute top-2 right-2 cursor-pointer hover:bg-slate-200 rounded-full p-2"> {
                                        eye ? <IoMdEyeOff /> : <IoEye />

                                    }</div>

                                </div>


                            </div>
                            <div className="text-red-600 text-sm font-semibold mt-2 ">
                                {err}

                            </div>
                            <div className="text-red-600 text-sm font-semibold mt-2 ">
                                {exist}

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                            <div className="divider text-white divider-warning">OR</div>
                            <div className="form-control">
                                <button onClick={creatUserWithGoogle} className="btn btn-primary">SignUp With Google</button>
                            </div>
                            <div className="text-white mt-4 text-center">
                                Allready Have An Account <Link to={'/auth/login'} className='pl-3 text-blue-600 hover:underline'>Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-span-6  py-10">
                    <img className='w-full' src={singupimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;