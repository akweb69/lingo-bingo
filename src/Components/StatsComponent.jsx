import React from "react";
import { Bar, Line, Pie, Doughnut, Radar } from "react-chartjs-2";
import { motion } from "framer-motion";
import { Chart as ChartJS } from "chart.js/auto";
import { Helmet } from "react-helmet";

const StatsComponent = () => {
    // Chart Data
    const barData = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [
            {
                label: "Words Learned",
                data: [12, 19, 15, 22, 30],
                backgroundColor: ["#3498db", "#2ecc71", "#e74c3c", "#9b59b6", "#f1c40f"],
            },
        ],
    };

    const lineData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Learning Trend",
                data: [50, 70, 90, 110],
                fill: false,
                borderColor: "#e74c3c",
                tension: 0.4,
            },
        ],
    };

    const pieData = {
        labels: ["Verbs", "Nouns", "Adjectives", "Phrases"],
        datasets: [
            {
                label: "Topic Mastery",
                data: [40, 30, 20, 10],
                backgroundColor: ["#2ecc71", "#3498db", "#e74c3c", "#f1c40f"],
            },
        ],
    };

    const doughnutData = {
        labels: ["Reading", "Writing", "Listening", "Speaking"],
        datasets: [
            {
                label: "Time Spent",
                data: [30, 25, 25, 20],
                backgroundColor: ["#1abc9c", "#e67e22", "#9b59b6", "#34495e"],
            },
        ],
    };

    const radarData = {
        labels: ["Spelling", "Grammar", "Pronunciation", "Context"],
        datasets: [
            {
                label: "Error Types",
                data: [50, 40, 60, 30],
                backgroundColor: "rgba(52, 152, 219, 0.2)",
                borderColor: "#3498db",
                borderWidth: 2,
            },
        ],
    };

    // Main Layout
    return (
        <div className="p-6  text-white">
            <Helmet>
                <title>Statistics - Lingo-Bingo</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center py-5 md:py-0 md:mt-10 md:text-5xl md:mb-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Statistics
            </h1>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-row-gap-20 md:w-11/12 mx-auto items-center justify-between  md:gap-20 bg-[rgb(0,0,34)]"
            >
                {/* Bar Chart */}
                <div className="chart-container  md:bg-[rgb(0,0,40)] p-10 md:p-20">

                    <Bar data={barData} />
                    <h2 className="text-xl pt-5 font-semibold text-center mb-2">Daily Vocabulary Progress</h2>
                    <p className="text-sm text-center mb-4">
                        This chart shows the number of words learned on each day of the week.
                    </p>
                </div>

                {/* Line Chart */}
                <div className="chart-container md:bg-[rgb(0,0,40)] p-10 md:p-20">

                    <Line data={lineData} />
                    <h2 className="text-xl pt-5 font-semibold text-center mb-2">Weekly Learning Trend</h2>
                    <p className="text-sm text-center mb-4">
                        Track your overall learning trend across four weeks.
                    </p>
                </div>

                {/* Pie Chart */}
                <div className="chart-container md:bg-[rgb(0,0,40)] p-10 md:p-20">

                    <Pie data={pieData} />
                    <h2 className="text-xl pt-5 font-semibold text-center mb-2">Topic Mastery</h2>
                    <p className="text-sm text-center mb-4">
                        A breakdown of your mastery in different topics: verbs, nouns, adjectives, and phrases.
                    </p>
                </div>

                {/* Doughnut Chart */}
                <div className="chart-container md:bg-[rgb(0,0,40)] p-10 md:p-20">

                    <Doughnut data={doughnutData} />
                    <h2 className="text-xl pt-5 font-semibold text-center mb-2">Time Allocation</h2>
                    <p className="text-sm text-center mb-4">
                        This chart represents the time spent on different learning activities: reading, writing, listening, and speaking.
                    </p>
                </div>

                {/* Radar Chart */}
                <div className="chart-container md:bg-[rgb(0,0,40)] p-10 md:p-20" >

                    <Radar data={radarData} />
                    <h2 className="text-xl pt-5 font-semibold text-center mb-2">Error Types Distribution</h2>
                    <p className="text-sm text-center mb-4">
                        Analyze the common types of errors you make, such as spelling, grammar, pronunciation, and context-related issues.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default StatsComponent;
