import React, { useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <section className="py-12 " id="contact">
            <div className="container mx-auto px-4 md:px-8">
                <div data-aos="fade-right" className="text-transparent text-5xl font-bold bg-gradient-to-tr from-purple-800 to-pink-800 bg-clip-text text-center pt-20 pb-10 w-fit mx-auto">Contact Us</div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Contact Info Section */}
                    <div data-aos="fade-right" className="flex flex-col justify-center space-y-6 bg-[rgb(0,0,36)] shadow-sm shadow-[rgb(0,0,40)]  rounded-lg p-6">
                        <div className="flex items-center">
                            <FaPhone className="text-blue-600 text-2xl mr-4" />
                            <p data-aos="fade-up" className="text-gray-400 font-medium">+880 1768 037870</p>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-green-600 text-2xl mr-4" />
                            <p data-aos="fade-up" className="text-gray-400 font-medium">akwebdev69@gmail.com</p>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-yellow-600 text-2xl mr-4" />
                            <p data-aos="fade-up" className="text-gray-400 font-medium">5942, Raikali , Akkelpur , Joypurhat</p>
                        </div>
                    </div>
                    {/* Contact Form Section */}
                    <div className=" shadow-lg bg-[rgb(0,0,36)] shadow-[rgb(0,0,40)]  rounded-lg p-6">
                        <form data-aos="fade-left" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-400 font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-400 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-400 font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Your Message"
                                    className="textarea textarea-bordered w-full mt-1"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
