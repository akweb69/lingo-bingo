import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {


    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    return (
        <section className=" bg-[rgb(0,0,31)]" id="about">
            <div className="container mx-auto px-4 md:px-8">
                <h2 data-aos="fade-up" className="text-3xl lg:text-5xl font-bold pb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-8">
                    About Us
                </h2>
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Image Section */}
                    <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <img data-aos="fade-right"
                            src="https://i.ibb.co/5GQ6jYH/s3.jpg"
                            alt="About Us"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                    {/* Content Section */}
                    <div data-aos="fade-left" className="lg:w-1/2 lg:pl-8">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                            Our Mission
                        </h3>
                        <p className="text-white mb-6">
                            Our mission is to empower individuals to learn Arabic vocabulary
                            effectively, fostering cultural understanding and communication.
                            We aim to provide accessible and engaging resources that help
                            learners master the language at their own pace.
                        </p>
                        <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                            Our Vision
                        </h3>
                        <p className="text-white">
                            We envision a world where learning Arabic bridges gaps, fosters
                            unity, and opens doors to countless opportunities. Our goal is to
                            be a trusted platform for language learners worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
