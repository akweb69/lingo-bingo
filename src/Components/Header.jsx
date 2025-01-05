import { useContext } from "react";
import { ContextData } from "../DataProvider/ContextProviderData";

const Header = () => {
    const { user } = useContext(ContextData);
    return (
        <>
            {
                user && user?.email ? <p className="text-sm text-center font-bold text-transparent bg-gradient-to-tr from-pink-500 via-purple-600 to-amber-600 bg-clip-text pt-2">Welcome Back , {user.displayName}</p> : ""
            }
        </>
    );
};

export default Header;