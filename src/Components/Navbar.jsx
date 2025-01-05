import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ContextData } from '../DataProvider/ContextProviderData';
import "../Styles/Navbar.css"

const Navbar = () => {

    const { user, signOutUser } = useContext(ContextData);
    console.log(user)
    return (
        <div>
            <div className="navbar px-0   ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu text-white w-[90vw] menu-sm dropdown-content bg-purple-950 rounded-box z-[1] mt-3  p-2 shadow">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/start-learning'}> Start-Learning</NavLink></li>
                            <li><NavLink to={'/tutorials'}> Tutorials</NavLink></li>
                            <li><NavLink to={'/about'}> About</NavLink></li>
                            <li><NavLink to={'/blogs'}> Blogs</NavLink></li>
                            <li><NavLink to={'/statistics'}> Statistics</NavLink></li>

                            <li><NavLink to={'/faq'}> FAQ</NavLink></li>

                            <li>{
                                user && user?.email ? <NavLink to={'/dashboard'}> Dashboard</NavLink> : ""
                            }</li>



                        </ul>
                    </div>
                    <Link to={'/'} className=" text-xl md:text-3xl font-bold bg-gradient-to-tr to-purple-600 from-pink-600 bg-clip-text text-transparent">LingoBingo</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-white menu-horizontal px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/start-learning'}> Start-Learning</NavLink></li>
                        <li><NavLink to={'/tutorials'}> Tutorials</NavLink></li>
                        <li><NavLink to={'/about'}> About</NavLink></li>
                        <li><NavLink to={'/blogs'}> Blogs</NavLink></li>
                        <li><NavLink to={'/statistics'}> Statistics</NavLink></li>
                        <li><NavLink to={'/faq'}> FAQ</NavLink></li>
                        <li>{
                            user && user?.email ? <NavLink to={'/dashboard'}> Dashboard</NavLink> : ""
                        }</li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center mr-2 animate1 rounded-full">
                        {
                            user && user?.email ? <div className="avatar online">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt='N/A' />
                                </div>
                            </div> : <p></p>
                        }
                    </div>
                    {
                        user && user.email ? <Link onClick={signOutUser} to={'/'} className="py-2 rounded-lg px-4 bg-gradient-to-l  cursor-pointer from-violet-500 to-fuchsia-500">Log Out</Link> : <Link to={'/auth/login'} className="py-2 rounded-lg px-4 bg-gradient-to-l  cursor-pointer from-violet-500 to-fuchsia-500">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;