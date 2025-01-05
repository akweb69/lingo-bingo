import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginimg from '../assets/img/login.png';
import { ContextData } from '../DataProvider/ContextProviderData';
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';


const Login = () => {
    const location = useLocation();
    console.log(location.state)
    const { signInUser, setResetEmail } = useContext(ContextData);
    const [err, setErr] = useState("")
    const [eye, setEye] = useState(true);
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const passowrd = form.get("password");
        const userInput = {
            email,
            passowrd
        }
        setErr("");
        if (passowrd.length < 6) {
            setErr("Password must be 6 char!")
            return;
        }

        // setUser(userInput)
        signInUser(email, passowrd)
            .then(() => {
                toast.success("Login Successfull!", {
                    position: "top-center"
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch(() => {
                setErr("Invalide Email Or Password!")
                toast.error("Invalid Your Email or Password !",
                    {
                        position: "top-center",
                        theme: "colored"
                    }

                )
            })


    }
    // ! eye toggling
    const handleEyeBtn = () => {
        setEye(!eye);
    }
    return (
        <div className="">
            <Helmet>
                <title>Login | Lingo-Bingp</title>
            </Helmet>
            <ToastContainer></ToastContainer>
            <div className="px-4 md:px-0 min-h-screen md:w-10/12 mx-auto md:flex justify-center items-center">
                <div className=""> <img className='w-full mb-5 md:mb-0 md:w-3/4' src={loginimg} alt="" /> </div>
                <div className="w-full">
                    <form onSubmit={handleLogin} className="card-body text-[rgb(0,0,31)] rounded-xl shadow-md shadow-purple-900 md:p-10">
                        <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
                            Login
                        </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input
                                onChange={(e) => setResetEmail(e.target.value)}
                                name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <div className="w-full relative">
                                <input name='password' type={`${eye ? "password" : "text"}`} placeholder="password" className="input w-full input-bordered" required />
                                <div onClick={handleEyeBtn} className="absolute top-2 right-2 cursor-pointer hover:bg-slate-200 rounded-full p-2"> {
                                    eye ? <IoMdEyeOff /> : <IoEye />

                                }</div>
                            </div>
                            <Link to={'/auth/forgetPassword'} className='text-xs text-white hover:underline pt-2 hover:text-blue-500'> Forget Password</Link>
                        </div>
                        <div className="text-sm font-semibold text-red-500 pt-2">
                            {err}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="mt-4 text-sm text-center text-white">
                            Don't Have An Account <Link className='text-blue-500 font-semibold pl-3 hover:underline hover:text-blue-600' to={'/auth/register'}>Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;