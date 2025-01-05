import CountUp from "react-countup";
import '../Styles/SuccessSection.css'
import Slider from "./Slider";
import About from "./About";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeBlogs from "./HomeBlogs";
import Benefits from "./Benefits";
import Contact from "./Contact";
import Newsletter from "./Newsletter";
import Features from "./Features ";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials ";
import FAQ from "./FAQ ";


const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    return (
        <div>
            {/* banner */}
            <section className=" min-h-screen">
                <Slider></Slider>
            </section>
            <section>
                <Benefits></Benefits>
            </section>

            <section className="min-h-screen">
                <About></About>
            </section>
            <section>
                <Features></Features>
            </section>


            {/* success section */}
            <div data-aos="fade-up" className="pt-20">
                <section data-aos="fade-up" className="py-20 rounded-t-full success-section">
                    <div data-aos="fade-up" className="w-11/12 mx-auto">
                        <div className="text-transparent text-5xl font-bold bg-gradient-to-tr from-purple-800 to-pink-800 bg-clip-text text-center pb-20 w-fit mx-auto">_Success_</div>
                        <div className="lg:flex justify-center gap-6 items-center">
                            <div className="border-b md:border-b-0 py-10 lg:border-r border-purple-700 md:pr-10 flex justify-center items-center flex-col ">
                                <CountUp className="text-transparent text-5xl font-bold bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text " end={4629} start={-500} duration={5} />
                                <div className="text-3xl font-bold text-white py-3">
                                    New  Users
                                </div>
                                <div className="bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl">In Last Month</div>
                            </div>
                            <div className="">
                                <div className="border-b md:border-b-0 py-10 lg:border-r border-purple-700 md:pr-10 flex justify-center items-center flex-col ">
                                    <CountUp className="text-transparent text-5xl font-bold bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text " end={10} start={-10} duration={5} />
                                    <div className="text-3xl font-bold text-white py-3">
                                        Lessons
                                    </div>
                                    <div className="bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl">Every Lesson 50+ words</div>
                                </div>
                            </div>
                            <div className="">
                                <div className="border-b md:border-b-0 py-10 lg:border-r border-purple-700 md:pr-10 flex justify-center items-center flex-col ">
                                    <CountUp className="text-transparent text-5xl font-bold bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text " end={500} start={-500} duration={5} />
                                    <div className="text-3xl font-bold text-white py-3">
                                        Plus Words
                                    </div>
                                    <div className="bg-gradient-to-tr  from-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl">Makes Expart!</div>
                                </div>
                            </div>
                            <div className="">
                                <div className=" flex justify-center items-center flex-col ">
                                    <CountUp className="text-transparent text-5xl font-bold bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text " end={20} start={-20} duration={5} />
                                    <div className="text-3xl font-bold text-white py-3">
                                        Totorials
                                    </div>
                                    <div className="bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl">Easy To Learn</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section>
                <Testimonials></Testimonials>
            </section>
            <section className="mt-20">
                <Pricing></Pricing>
            </section>
            <section>
                <HomeBlogs></HomeBlogs>
            </section>
            <section>
                <FAQ></FAQ>
            </section>
            <section className="mb-20">
                <Contact></Contact>
            </section>
            <section className="">
                <Newsletter></Newsletter>
            </section>
        </div>
    );
};

export default Banner;