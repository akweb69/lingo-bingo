import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
    return (
        <div className="h-screen bg-gradient-to-br from-gray-900 to-purple-950 flex items-center justify-center text-white">
            <Helmet>
                <title>Error | Lingo-Bingp</title>
            </Helmet>
            <div className="text-center">
                {/* Animated Heading */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-extrabold mb-4"
                >
                    404
                </motion.h1>
                <motion.h2
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
                    className="text-2xl md:text-3xl font-semibold mb-6"
                >
                    Page Not Found
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-gray-400 mb-6 text-lg md:text-xl"
                >
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </motion.p>

                {/* Animated Button */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                >
                    <Link
                        to="/"
                        className="py-3 px-8 bg-gradient-to-r from-fuchsia-500 to-purple-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 ring-fuchsia-400"
                    >
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ErrorPage;
