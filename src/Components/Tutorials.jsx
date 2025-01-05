import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Tutorials = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 200,   // Offset for triggering animations
        });
    }, []);

    const tutorials = [
        {
            id: 1,
            title: "Arabic Alphabet Pronunciation",
            src: "https://www.youtube.com/embed/8_60iWXl7dw?si=3ktt31RLah4N6DBP",
        },
        {
            id: 2,
            title: "Learn Arabic - Arabic Alphabet Made Easy",
            src: "https://www.youtube.com/embed/QSLtNmRflBU?si=4dTEhSSOU7f2IItF",
        },
        {
            id: 3,
            title: "Learn Arabic - Arabic Alphabet Made Easy",
            src: "https://www.youtube.com/embed/b4Z2mX0wkAo?si=bq690asRZuIZuOt4",
        },
        {
            id: 4,
            title: "Nuraniyah - Letters",
            src: "https://www.youtube.com/embed/v1lP80wN-bo?si=K1eLuLjZrJhX2fhb",
        },
        {
            id: 5,
            title: "Alphabet Lesson",
            src: "https://www.youtube.com/embed/K83YZYcpExc?si=NRgO97RVEW4lh7v_",
        },
        {
            id: 6,
            title: "Learn Arabic from Zero",
            src: "https://www.youtube.com/embed/XC62pWvw4b0?si=3P9yKs16w3_XV5N7",
        },
        {
            id: 7,
            title: "Master Arabic",
            src: "https://www.youtube.com/embed/dNcIYtzAzGA?si=4xLWIWxN5zid-fi_",
        },
        {
            id: 8,
            title: "Learn Arabic from Scratch",
            src: "https://www.youtube.com/embed/NapGLT3WFX8?si=nKcg7E-5PWMBJD2q",
        },
    ];

    return (
        <div className="py-10 w-11/12 mx-auto text-white">
            <Helmet>
                <title>Tutorials | Lingo-Bingp</title>
            </Helmet>
            {/* Page Title */}
            <div className="text-center">
                <h1 className="text-4xl font-extrabold bg-gradient-to-tr from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Tutorials
                </h1>
                <p className="mt-2 text-lg text-gray-400">Learn Arabic with step-by-step guides</p>
            </div>

            {/* Tutorials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {tutorials.map((tutorial) => (
                    <div
                        key={tutorial.id}
                        data-aos="fade-up"
                        className="rounded-lg hover:shadow-md hover:shadow-purple-700 overflow-hidden shadow-lg bg-gray-800 border border-purple-700 hover:scale-105 transform transition-all duration-300"
                    >
                        <iframe
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-48"
                            src={tutorial.src}
                            title={`Tutorial ${tutorial.id}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-purple-400">
                                Tutorial {tutorial.id}
                            </h2>
                            <p className="mt-2 text-sm text-gray-300">{tutorial.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div data-aos="fade-up" className="text-center mt-10">
                <Link
                    to="/start-learning"
                    className="px-6 py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                    Start Learning Vocabulary
                </Link>
            </div>
        </div>
    );
};

export default Tutorials;
