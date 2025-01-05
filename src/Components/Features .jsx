import React, { useEffect } from "react";
import { FaChalkboardTeacher, FaCogs, FaRegStar, FaRegClock } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    const features = [
        {
            id: 1,
            icon: <FaChalkboardTeacher size={40} className="text-blue-500" />,
            title: "Interactive Lessons",
            description:
                "Engage with hands-on lessons that make learning Arabic fun and effective for all levels.",
        },
        {
            id: 2,
            icon: <FaCogs size={40} className="text-green-500" />,
            title: "Customized Learning",
            description:
                "Get personalized learning plans tailored to your progress, making every lesson relevant.",
        },
        {
            id: 3,
            icon: <FaRegStar size={40} className="text-yellow-500" />,
            title: "Gamified Learning",
            description:
                "Earn rewards, badges, and track your achievements as you advance through the Arabic language.",
        },
        {
            id: 4,
            icon: <FaRegClock size={40} className="text-purple-500" />,
            title: "Flexible Scheduling",
            description:
                "Learn Arabic on your terms with lessons that fit your schedule and pace.",
        },
    ];

    return (
        <section className="py-12 w-11/12 mx-auto bg-[rgb(0,0,31)] text-white mb-20">
            <div className="container mx-auto px-4 md:px-8">
                <h2 data-aos="fade-right" className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
                    Key Features of LingoBingo
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <div data-aos="fade-up"
                            key={feature.id}
                            className="bg-[rgb(0,0,40)] cursor-pointer  hover:shadow-purple-700 text-center p-6 rounded-lg shadow-lg hover:shadow-sm transition-shadow duration-300"
                        >
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
