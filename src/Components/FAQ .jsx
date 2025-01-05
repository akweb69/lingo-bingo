import { useEffect, useState } from 'react';
import img1 from "../assets/img/Questions-pana.png";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
    const [faqData, setFaqData] = useState([]);

    useEffect(() => {
        fetch("/FAQ.json")
            .then(res => res.json())
            .then(data => setFaqData(data));
    }, []);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);


    return (
        <section className="py-12  text-white">
            <div className="w-11/12 mx-auto px-6 md:px-16">
                <h2 data-aos="fade-right" className="text-3xl md:text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-10">
                    Frequently Asked Questions
                </h2>
                <div className="md:grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center">
                    {/* Image Section */}
                    <div data-aos="fade-right" className="flex justify-center md:justify-start mb-8 md:mb-0">
                        <img className="w-full h-auto rounded-lg shadow-lg" src={img1} alt="FAQ Illustration" />
                    </div>
                    {/* FAQ Accordion Section */}
                    <div className="space-y-6">
                        {faqData.slice(0, 4).map((q, idx) => (
                            <div data-aos="fade-left" key={idx} className="border-b-2 border-gray-700">
                                <details className="group cursor-pointer">
                                    <summary data-aos="fade-up" className="text-xl font-semibold py-3 text-purple-400 hover:text-purple-500 group-open:text-purple-500 transition-colors">
                                        {q.question}
                                    </summary>
                                    <p data-aos="fade-up" className="text-gray-400 mt-2">{q.answer}</p>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* View More Button */}
            <div className="text-center mt-10">
                <Link
                    to="/faq"
                    className="inline-block py-3 px-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg relative overflow-hidden transition-all duration-300 group"
                >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center justify-center">
                        <span>View More</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2 transform group-hover:translate-x-2 transition-all duration-300"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </span>
                </Link>
            </div>

        </section>
    );
};

export default FAQ;
