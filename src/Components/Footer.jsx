import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });


        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll effect
        });
    };

    return (
        <footer className="w-full bg-gray-900 text-white py-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
                {/* Social Media Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 data-aos="fade-right" className="text-2xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Follow Us
                    </h3>
                    <p data-aos="fade-left" className="mb-4 text-center md:text-left">
                        Stay connected with us on social media:
                    </p>
                    <div className="flex space-x-4">
                        <a data-aos="fade-right"
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transform hover:scale-125 transition-all duration-300"
                        >
                            <FaFacebook size={24} />
                        </a>
                        <a data-aos="fade-up"
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a data-aos="fade-right"
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-400 transform hover:scale-125 transition-all duration-300"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a data-aos="fade-up"
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transform hover:scale-125 transition-all duration-300"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="flex flex-col items-center">
                    <h3 data-aos="fade-up" className="text-2xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Newsletter
                    </h3>
                    <p data-aos="fade-right" className="mb-4 text-center">
                        Subscribe to our newsletter for the latest updates.
                    </p>
                    <form className="w-full max-w-sm flex flex-col space-y-3">
                        <div data-aos="fade-left" className="relative w-full">
                            <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="email"
                                className="w-full pl-10 pr-3 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                placeholder="Enter your email"
                            />
                        </div>
                        <button
                            data-aos="fade-up"
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg transition-all duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Important Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 data-aos="fade-right" className="text-2xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-center md:text-left">
                        <li>
                            <a data-aos="fade-right"
                                href="/about"
                                className="hover:text-purple-400 transition-all duration-300"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a data-aos="fade-left"
                                href="/contact"
                                className="hover:text-purple-400 transition-all duration-300"
                            >
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a data-aos="fade-right"
                                href="/privacy-policy"
                                className="hover:text-purple-400 transition-all duration-300"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a data-aos="fade-left"
                                href="/terms-of-service"
                                className="hover:text-purple-400 transition-all duration-300"
                            >
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 mt-10 pt-5 text-center">
                <p >
                    © {new Date().getFullYear()} LingoBingo. All rights reserved. Built
                    with ❤️ by Abu Kalam.
                </p>
            </div>

            {/* Floating Scroll to Top Button */}
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full shadow-xl transform hover:scale-125 hover:rotate-45 transition-all duration-300 ease-in-out"
                    aria-label="Scroll to top"
                >
                    <span className="text-2xl font-bold">↑</span>
                </button>


            )}
        </footer>
    );
};

export default Footer;
