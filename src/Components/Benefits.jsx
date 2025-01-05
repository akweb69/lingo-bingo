import React, { useEffect } from "react";
import { FaLanguage, FaBusinessTime, FaGlobe, FaBrain } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Benefits = () => {


    const benefits = [
        {
            id: 1,
            icon: <FaLanguage size={40} className="text-blue-600" />,
            title: "Enhanced Communication",
            description:
                "Connect with millions of Arabic speakers worldwide and build meaningful relationships.",
        },
        {
            id: 2,
            icon: <FaBusinessTime size={40} className="text-green-600" />,
            title: "Career Opportunities",
            description:
                "Boost your career prospects by learning the language of many growing markets.",
        },
        {
            id: 3,
            icon: <FaGlobe size={40} className="text-yellow-600" />,
            title: "Cultural Awareness",
            description:
                "Understand the rich traditions, literature, and history of the Arab world.",
        },
        {
            id: 4,
            icon: <FaBrain size={40} className="text-purple-600" />,
            title: "Cognitive Benefits",
            description:
                "Improve memory, problem-solving skills, and multitasking abilities through language learning.",
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    return (
        <section className="py-12 w-11/12 mx-auto" style={{ backgroundColor: "rgb(0,0,31)" }}>
            <div className="container mx-auto px-4 md:px-8">
                <h2 data-aos="fade-right" className="text-3xl font-bold text-center text-white mb-8">
                    Benefits of Learning Arabic Vocabulary
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit) => (
                        <div data-aos="fade-up"
                            key={benefit.id}
                            className="card bg-[rgb(0,0,44)] cursor-pointer  hover:shadow-purple-700 shadow-md rounded-lg p-6 text-center  transition-shadow duration-300"
                        >
                            <div className="flex justify-center mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-300">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
