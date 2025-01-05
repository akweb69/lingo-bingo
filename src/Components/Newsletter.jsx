import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., save email to database or send a request)
        console.log("Subscribed with email:", email);
        setEmail('');
    };
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    return (
        <section className="py-12" style={{ backgroundColor: "rgb(0,0,31)" }}>
            <div className="container mx-auto px-4 md:px-8 text-center">
                <h2 data-aos="fade-right" className="text-3xl font-bold text-white mb-4">
                    Subscribe to Our Newsletter
                </h2>
                <p data-aos="fade-left" className="text-gray-300 mb-6">
                    Stay updated with the latest news, tips, and resources for learning Arabic vocabulary!
                </p>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-center">
                    <input data-aos="fade-up"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full sm:w-2/3 p-3 text-gray-700 rounded-lg mb-4 sm:mb-0 sm:mr-4"
                        style={{ backgroundColor: "rgb(255, 255, 255, 0.8)" }}
                    />
                    <button
                        data-aos="fade-right"
                        type="submit"
                        className="w-full sm:w-auto py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
