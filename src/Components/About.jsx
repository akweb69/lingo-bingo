import React from 'react';
import img11 from "../assets/img/Vision statement-rafiki.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import p1 from "../assets/img/web1.jpg";
import p2 from "../assets/img/web2.jpg";
import p3 from "../assets/img/web3.avif";;
import p4 from "../assets/img/web3.jpg";;
import p5 from "../assets/img/web4.png";;
import p6 from "../assets/img/web6.png";;
import p7 from "../assets/img/web7.webp";;
import i1 from "../assets/img/icons/i1.png"
import i2 from "../assets/img/icons/i2.png"
import i3 from "../assets/img/icons/i3.png"
import i4 from "../assets/img/icons/i4.png"
import i5 from "../assets/img/icons/i5.png"
import i6 from "../assets/img/icons/i6.png"
import i7 from "../assets/img/icons/i7.png"
import i8 from "../assets/img/icons/i8.png"
import i9 from "../assets/img/icons/i9.png"
import AboutUs from './AboutUs';
import { Helmet } from 'react-helmet';

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <div className='w-11/12 mx-auto min-h-screen  py-20 mb-20 md:mb-36'>


            <AboutUs></AboutUs>

            {/* projects */}
            <div className="">
                <div data-aos="fade-right" className=" w-fit mx-auto py-20 bg-clip-text bg-gradient-to-tr from-amber-700 to-pink-700 text-2xl md:text-4xl lg:text-5xl font-bold text-transparent">Others Projects!</div>
                <Marquee speed={30} loop={0} gradientWidth={200} gradientColor='rgb(248,251,253)'  >
                    <div className="py-20"></div>
                    <div data-aos="fade-right" className="h-72  shadow-sm shadow-purple-700 ml-10">
                        <div className=""><img className='h-72 w-full rounded-xl shadow-md shadow-purple-700' src={p1} alt="" /></div>
                    </div>
                    <div data-aos="fade-right" className="h-72  shadow-sm shadow-purple-700 ml-10">
                        <div className=""><img className='h-72 w-full rounded-xl shadow-md shadow-purple-700' src={p2} alt="" /></div>
                    </div>
                    <div data-aos="fade-right" className="h-72  shadow-sm shadow-purple-700 ml-10">
                        <div className=""><img className='h-72 w-full rounded-xl shadow-md shadow-purple-700' src={p3} alt="" /></div>
                    </div>
                    <div data-aos="fade-right" className="h-72  shadow-sm shadow-purple-700 ml-10">
                        <div className=""><img className='h-72 w-full rounded-xl shadow-md shadow-purple-700' src={p4} alt="" /></div>
                    </div>
                    <div data-aos="fade-right" className="h-72  shadow-sm shadow-purple-700 ml-10">
                        <div className=""><img className='h-72 w-full rounded-xl shadow-md shadow-purple-700' src={p5} alt="" /></div>
                    </div>
                    <div data-aos="fade-right" className="h-72  shadow-sm shadow-purple-700 ml-10">
                        <div className=""><img className='h-72 w-full rounded-xl shadow-md shadow-purple-700' src={p6} alt="" /></div>
                    </div>
                    <div data-aos="fade-right" className="h-72  shadow-sm shadow-purple-700 ml-10">
                        <div className=""><img className='h-72 w-full rounded-xl shadow-md shadow-purple-700' src={p7} alt="" /></div>
                    </div>

                </Marquee>
            </div>
            {/* skills */}
            <div className="">
                <div data-aos="fade-right" className=" w-fit mx-auto py-20 bg-clip-text bg-gradient-to-tr from-amber-700 to-pink-700 text-2xl md:text-4xl lg:text-5xl font-bold text-transparent">Skills!</div>
                <Marquee direction='right'  >
                    <img data-aos="fade-right" className='md:h-36 h-28  mx-10' src={i1} alt="" />
                    <img data-aos="fade-right" className='md:h-36 h-28  mx-10' src={i2} alt="" />
                    <img data-aos="fade-right" className='md:h-36 h-28  mx-10' src={i3} alt="" />
                    <img data-aos="fade-right" className='md:h-36 h-28  mx-10' src={i4} alt="" />
                    <img data-aos="fade-right" className='md:h-36 h-28  mx-10' src={i5} alt="" />
                    <img data-aos="fade-right" className='md:h-36 h-28  mx-10' src={i6} alt="" />
                    <img data-aos="fade-right" className='md:h-36 h-28  mx-10' src={i7} alt="" />
                    <img data-aos="fade-right" className='md:h-36 h-28  mx-10' src={i8} alt="" />
                    <img data-aos="fade-right" className='md:h-36 h-28  mx-10' src={i9} alt="" />
                </Marquee>
            </div>
        </div >
    );
};

export default About;