import React, { useState, useEffect, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContextData } from '../DataProvider/ContextProviderData';

const ForgetPassword = () => {

    const { resetEmail1 } = useContext(ContextData);
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success('Password reset email has been sent!', {
            position: "top-center",
            autoClose: 2000,
        });

        setTimeout(() => {
            const gmailLink = `https://mail.google.com/mail/u/0/#inbox`;
            window.open(gmailLink, '_blank');
        }, 3000);
    };

    return (
        <div className="h-screen bg-gradient-to-tr from-[rgb(0,40,39)] via-[rgb(0,0,31)] to-[rgb(0,10,41)] flex items-center justify-center">
            <ToastContainer />

            <div className="w-full max-w-sm bg-gray-900 p-8 rounded-lg shadow-lg text-white">
                <h2 className="text-3xl font-bold text-center mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Forgot Password
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-lg font-semibold mb-2">Email Address</label>
                        <input

                            type="email"
                            id="email"
                            name="email"
                            defaultValue={resetEmail1}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
                        >
                            Send Reset Link
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
