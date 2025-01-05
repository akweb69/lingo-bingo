import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            feedback: "This platform has revolutionized the way I learn Arabic. Highly recommended!",
            role: "Language Enthusiast",
            author: "https://i.ibb.co/Xj2VSJw/i8-Du-Ag-RYGe.png",
        },
        {
            id: 2,
            name: "Jane Smith",
            feedback: "Amazing experience! The gamified learning system keeps me motivated.",
            role: "Student",
            author: "https://i.ibb.co/Xj2VSJw/i8-Du-Ag-RYGe.png",
        },
        {
            id: 3,
            name: "Ali Khan",
            feedback: "The flexibility and interactive lessons are perfect for my busy schedule.",
            role: "Professional",
            author: "https://i.ibb.co/Xj2VSJw/i8-Du-Ag-RYGe.png",
        },
        {
            id: 4,
            name: "Fatima Noor",
            feedback: "The interactive lessons make learning engaging and enjoyable.",
            role: "Traveler",
            author: "https://i.ibb.co/Xj2VSJw/i8-Du-Ag-RYGe.png",
        },
        {
            id: 5,
            name: "Michael Brown",
            feedback: "I love the gamified approach—it keeps me coming back for more!",
            role: "Teacher",
            author: "https://i.ibb.co/Xj2VSJw/i8-Du-Ag-RYGe.png",
        },
    ];
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);


    return (
        <section className="py-12  text-white">
            <div className="w-11/12 mx-auto">
                <h2 data-aos="fade-right" className="text-3xl md:text-4xl font-bold text-center mb-8">
                    What Our Learners Say
                </h2>
                <div className="carousel w-full">
                    <div data-aos="fade-up" id="slide1" className="carousel-item relative w-full">
                        <div className="flex py-20 w-full flex-col justify-center items-center bg-[rgb(0,0,38)]">
                            <img className="w-20 rounded-full md:w-36" src={testimonials[0].author} alt="" />
                            <h1 className="py-4 text:lg font-bold">Name: {testimonials[0].name}</h1>
                            <div className="md:w-2/3 px-2  mx-auto ">
                                <p className="text-center">{testimonials[0].feedback}</p></div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn bg-[rgba(0,0,0,0.2)] rounded-full outline-none border-none">❮</a>
                            <a href="#slide2" className="btn bg-[rgba(0,0,0,0.2)] rounded-full outline-none border-none">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex w-full flex-col justify-center items-center  bg-[rgb(0,0,38)]">
                            <img className="w-20 rounded-full md:w-36" src={testimonials[1].author} alt="" />
                            <h1 className="py-4 text:lg font-bold">Name: {testimonials[1].name}</h1>
                            <div className="md:w-2/3 px-2  mx-auto ">
                                <p className="text-center">{testimonials[1].feedback}</p></div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn bg-[rgba(0,0,0,0.2)] rounded-full outline-none border-none">❮</a>
                            <a href="#slide3" className="btn bg-[rgba(0,0,0,0.2)] rounded-full outline-none border-none">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex w-full flex-col justify-center items-center  bg-[rgb(0,0,38)]">
                            <img className="w-20 rounded-full md:w-36" src={testimonials[2].author} alt="" />
                            <h1 className="py-4 text:lg font-bold">Name: {testimonials[2].name}</h1>
                            <div className="md:w-2/3 px-2  mx-auto ">
                                <p className="text-center">{testimonials[2].feedback}</p></div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn bg-[rgba(0,0,0,0.2)] rounded-full outline-none border-none">❮</a>
                            <a href="#slide4" className="btn bg-[rgba(0,0,0,0.2)] rounded-full outline-none border-none">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex w-full flex-col justify-center items-center  bg-[rgb(0,0,38)]">
                            <img className="w-20 rounded-full md:w-36" src={testimonials[3].author} alt="" />
                            <h1 className="py-4 text:lg font-bold">Name: {testimonials[3].name}</h1>
                            <div className="md:w-2/3 px-2  mx-auto ">
                                <p className="text-center">{testimonials[3].feedback}</p></div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn bg-[rgba(0,0,0,0.2)] rounded-full outline-none border-none">❮</a>
                            <a href="#slide1" className="btn bg-[rgba(0,0,0,0.2)] rounded-full outline-none border-none">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
