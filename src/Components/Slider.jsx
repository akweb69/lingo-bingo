import React, { useState, useEffect, useContext } from 'react';
import { AwesomeButton, AwesomeButtonProgress } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import slide1 from '../assets/img/s1.jpg';
import slide2 from '../assets/img/s2.jpg';
import slide3 from '../assets/img/s3.jpg';
import slide4 from '../assets/img/s4.jpg';
import slide5 from '../assets/img/s5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { ReactTyped } from "react-typed";
import { ContextData } from '../DataProvider/ContextProviderData';

const Slider = () => {
    const images = [slide1, slide2, slide3, slide4, slide5];
    const [currentIndex, setCurrentIndex] = useState(0);
    const { user } = useContext(ContextData);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="min-h-screen w-full flex justify-center items-center bg-no-repeat bg-[rgba(0,0,0,0.4)] bg-blend-overlay"
            style={{
                backgroundImage: `url(${images[currentIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 3s ease-in-out',
            }}
        >
            <div data-aos="fade-right" className=" px-4 md:w-2/3 mx-auto text-center text-white">

                <div className="text-3xl pb-4 md:text-5xl lg:text-6xl font-extrabold text-transparent bg-gradient-to-tr from-purple-700 via-pink-700 to-violet-700 bg-clip-text">
                    {
                        user && user?.displayName ? <ReactTyped
                            strings={[
                                `Welcome ${user?.displayName}`,
                                "Welcome to Lingo-Bingo!",

                            ]}
                            typeSpeed={100}
                            backSpeed={40}
                            loop
                        /> : <ReactTyped
                            strings={[
                                "Welcome to Lingo-Bingo!",

                            ]}
                            typeSpeed={60}
                            backSpeed={40}
                            loop
                        />
                    }
                </div>

                <p className="text-3xl md:text-5xl lg:text-5xl lg:font-extrabold text-center font-bold bg-gradient-to-tr pb-4 to-purple-600 from-pink-600 bg-clip-text text-transparent">LingoBingo Is The Best Platform For Learning Arabic Vocabulary!</p>
                <p data-aos="fade-left" className=" mt-1 md:px-10 text-gray-300 text-center">LingoBingo is a top-notch platform for learning Arabic, offering interactive lessons, engaging activities, and expert guidance. Whether you're a beginner or looking to refine your skills, LingoBingo makes Arabic learning easy, fun, and effective for learners of all levels. Start your language journey today!</p>
                <div className="mt-5">
                    {/* <AwesomeButton type="primary">Get Started</AwesomeButton> */}
                    <div className="text-center mt-10">
                        <Link
                            to="/start-learning"
                            className="inline-flex items-center py-3 px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
                        >
                            <span className="mr-3 text-lg">Get Started</span>
                            <FaArrowRight data-aos="fade-up" className="group-hover:translate-x-2 transition-all duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
