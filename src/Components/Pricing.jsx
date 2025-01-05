import React, { useEffect } from "react";
import { FaCheckCircle, FaCrown, FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pricing = () => {
    const plans = [
        {
            id: 1,
            name: "Basic",
            price: "$9.99/month",
            features: ["Access to lessons", "Basic progress tracking"],
            logo: <FaStar size={40} className="text-yellow-500" />,
        },
        {
            id: 2,
            name: "Pro",
            price: "$19.99/month",
            features: ["All Basic features", "Live tutor sessions", "Advanced analytics"],
            logo: <FaCheckCircle size={40} className="text-green-500" />,
        },
        {
            id: 3,
            name: "Premium",
            price: "$29.99/month",
            features: ["All Pro features", "Priority support", "Exclusive webinars"],
            logo: <FaCrown size={40} className="text-purple-500" />,
        },
    ];
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);


    return (
        <section className="py-12 bg-[rgb(0,0,31)] text-white">
            <div className="w-11/12 mx-auto">
                <h2 data-aos="fade-right" className="text-3xl md:text-4xl font-bold text-center mb-8">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-9/12 mx-auto">
                    {plans.map((plan) => (
                        <div data-aos="fade-up"
                            key={plan.id}
                            className="bg-[rgb(0,0,36)] text-white p-6 rounded-lg shadow-lg hover:shadow-md hover:shadow-purple-600 transition-shadow duration-300 flex flex-col items-center"
                        >
                            <div data-aos="fade-right" className="mb-6">{plan.logo}</div>
                            <h3 data-aos="fade-left" className="text-xl font-bold mb-4 text-center">{plan.name}</h3>
                            <p data-aos="fade-right" className="text-2xl font-semibold mb-6 text-center">{plan.price}</p>
                            <ul data-aos="fade-up" className="space-y-2 text-gray-100 mb-6">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex justify-start items-center">
                                        <span className="mr-2">✔️</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button data-aos="fade-up" className="mt-auto w-full bg-gradient-to-r from-purple-700 to-pink-600 text-white py-2 rounded-md hover:bg-opacity-90 transition">
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
