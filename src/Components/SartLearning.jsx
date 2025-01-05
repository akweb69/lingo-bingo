import { Link, useLoaderData } from 'react-router-dom';
import '../Styles/Lesson.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const SartLearning = () => {
    const data = useLoaderData();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    return (
        <div className="w-full  ">
            <Helmet>
                <title>Start Learning | Lingo-Bingp</title>
            </Helmet>
            <div className=" w-11/12 min-h-screen mx-auto flex  justify-center items-center">
                <div className="w-full grid lg:grid-cols-5 md:grid-cols-3 py-10 grid-cols-2  gap-5 items-center justify-center">
                    <div

                        id="card" className=" shadow-md shadow-purple-700  p-4 rounded-lg flex-col flex justify-center items-center bg-gradient-to-tr from-violet-800 to-fuchsia-800 relative">
                        <p className="text-xl md:text-3xl font-bold ">L1</p>
                        <h1 className="text-lg md:text-2xl py-1 font-semibold text-white">Lesson 01</h1>
                        <p className="text-sm md:text-base font-semibold text-amber-100 text-center">Lesson 01 has 90 words</p>
                        <div className="border text-center flex justify-center items-center text-xs text-white mt-4 border-purple-500 rounded-lg bg-gradient-to-l shadow-md shadow-purple-800 cursor-pointer from-violet-500 to-fuchsia-500">
                            <Link to={'/start-learning/Lesson_01'} className='py-2 px-3 '>Start Learning</Link>
                        </div>
                    </div>
                    <div id="card" className=" shadow-md shadow-purple-700  p-4 rounded-lg flex-col flex justify-center items-center bg-gradient-to-tr from-violet-800 to-fuchsia-800 relative">
                        <p className="text-xl md:text-3xl font-bold ">L2</p>
                        <h1 className="text-lg md:text-2xl py-1 font-semibold text-white">Lesson 02</h1>
                        <p className="text-sm md:text-base font-semibold text-amber-100 text-center">Lesson 02 has 68 words</p>
                        <div className="border text-center flex justify-center items-center text-xs text-white mt-4 border-purple-500 rounded-lg bg-gradient-to-l shadow-md shadow-purple-800 cursor-pointer from-violet-500 to-fuchsia-500">
                            <Link to={'/start-learning/Lesson_02'} className='py-2 px-3 '>Start Learning</Link>
                        </div>
                    </div>
                    <div id="card" className=" shadow-md shadow-purple-700  p-4 rounded-lg flex-col flex justify-center items-center bg-gradient-to-tr from-violet-800 to-fuchsia-800 relative">
                        <p className="text-xl md:text-3xl font-bold ">L3</p>
                        <h1 className="text-lg md:text-2xl py-1 font-semibold text-white ">Lesson 03</h1>
                        <p className="text-sm md:text-base font-semibold text-amber-100 text-center">Lesson 03 has 48 words</p>
                        <div className="border text-center flex justify-center items-center text-xs text-white mt-4 border-purple-500 rounded-lg bg-gradient-to-l shadow-md shadow-purple-800 cursor-pointer from-violet-500 to-fuchsia-500">
                            <Link to={'/start-learning/Lesson_03'} className='py-2 px-3 '>Start Learning</Link>
                        </div>
                    </div>
                    <div id="card" className=" shadow-md shadow-purple-700  p-4 rounded-lg flex-col flex justify-center items-center bg-gradient-to-tr from-violet-800 to-fuchsia-800 relative">
                        <p className="text-xl md:text-3xl font-bold ">L4</p>
                        <h1 className="text-lg md:text-2xl py-1 font-semibold text-white">Lesson 04</h1>
                        <p className="text-sm md:text-base font-semibold text-amber-100 text-center">Lesson 04 has 36 words</p>
                        <div className="border text-center flex justify-center items-center text-xs text-white mt-4 border-purple-500 rounded-lg bg-gradient-to-l shadow-md shadow-purple-800 cursor-pointer from-violet-500 to-fuchsia-500">
                            <Link to={'/start-learning/Lesson_04'} className='py-2 px-3 '>Start Learning</Link>
                        </div>
                    </div>
                    <div id="card" className=" shadow-md shadow-purple-700  p-4 rounded-lg flex-col flex justify-center items-center bg-gradient-to-tr from-violet-800 to-fuchsia-800 relative">
                        <p className="text-xl md:text-3xl font-bold ">L5</p>
                        <h1 className="text-lg md:text-2xl py-1 font-semibold text-white">Lesson 05</h1>
                        <p className="text-sm md:text-base font-semibold text-amber-100 text-center">Lesson 05 has 27 words</p>
                        <div className="border text-center flex justify-center items-center text-xs text-white mt-4 border-purple-500 rounded-lg bg-gradient-to-l shadow-md shadow-purple-800 cursor-pointer from-violet-500 to-fuchsia-500">
                            <Link to={'/start-learning/Lesson_05'} className='py-2 px-3 '>Start Learning</Link>
                        </div>
                    </div>
                    <div data-aos="fade-up" id="card" className=" shadow-md shadow-purple-700  p-4 rounded-lg flex-col flex justify-center items-center bg-gradient-to-tr from-violet-800 to-fuchsia-800 relative">
                        <p className="text-xl md:text-3xl font-bold ">L6</p>
                        <h1 className="text-lg md:text-2xl py-1 font-semibold text-white">Lesson 06</h1>
                        <p className="text-sm md:text-base font-semibold text-amber-100 text-center">Lesson 06 has 23 words</p>
                        <div className="border text-center flex justify-center items-center text-xs text-white mt-4 border-purple-500 rounded-lg bg-gradient-to-l shadow-md shadow-purple-800 cursor-pointer from-violet-500 to-fuchsia-500">
                            <Link to={'/start-learning/Lesson_06'} className='py-2 px-3 '>Start Learning</Link>
                        </div>
                    </div>
                    <div data-aos="fade-up" id="card" className=" shadow-md shadow-purple-700  p-4 rounded-lg flex-col flex justify-center items-center bg-gradient-to-tr from-violet-800 to-fuchsia-800 relative">
                        <p className="text-xl md:text-3xl font-bold ">L7</p>
                        <h1 className="text-lg md:text-2xl py-1 font-semibold text-white">Lesson 07</h1>
                        <p className="text-sm md:text-base font-semibold text-amber-100 text-center">Lesson 07 has 33 words</p>
                        <div className="border text-center flex justify-center items-center text-xs text-white mt-4 border-purple-500 rounded-lg bg-gradient-to-l shadow-md shadow-purple-800 cursor-pointer from-violet-500 to-fuchsia-500">
                            <Link to={'/start-learning/Lesson_07'} className='py-2 px-3 '>Start Learning</Link>
                        </div>
                    </div>
                    <div data-aos="fade-up" id="card" className=" shadow-md shadow-purple-700  p-4 rounded-lg flex-col flex justify-center items-center bg-gradient-to-tr from-violet-800 to-fuchsia-800 relative">
                        <p className="text-xl md:text-3xl font-bold ">L8</p>
                        <h1 className="text-lg md:text-2xl py-1 font-semibold text-white">Lesson 08</h1>
                        <p className="text-sm md:text-base font-semibold text-amber-100 text-center">Lesson 08 has 24 words</p>
                        <div className="border text-center flex justify-center items-center text-xs text-white mt-4 border-purple-500 rounded-lg bg-gradient-to-l shadow-md shadow-purple-800 cursor-pointer from-violet-500 to-fuchsia-500">
                            <Link to={'/start-learning/Lesson_08'} className='py-2 px-3 '>Start Learning</Link>
                        </div>
                    </div>
                    <div data-aos="fade-up" id="card" className=" shadow-md shadow-purple-700  p-4 rounded-lg flex-col flex justify-center items-center bg-gradient-to-tr from-violet-800 to-fuchsia-800 relative">
                        <p className="text-xl md:text-3xl font-bold ">L9</p>
                        <h1 className="text-lg md:text-2xl py-1 font-semibold text-white">Lesson 09</h1>
                        <p className="text-sm md:text-base font-semibold text-amber-100 text-center">Lesson 09 has 15 words</p>
                        <div className="border text-center flex justify-center items-center text-xs text-white mt-4 border-purple-500 rounded-lg bg-gradient-to-l shadow-md shadow-purple-800 cursor-pointer from-violet-500 to-fuchsia-500">
                            <Link to={'/start-learning/Lesson_09'} className='py-2 px-3 '>Start Learning</Link>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        id="card" className=" shadow-md shadow-purple-700  p-4 rounded-lg flex-col flex justify-center items-center bg-gradient-to-tr from-violet-800 to-fuchsia-800 relative">
                        <p className="text-xl md:text-3xl font-bold ">L10</p>
                        <h1 className="text-lg md:text-2xl py-1 font-semibold text-white">Lesson 10</h1>
                        <p className="text-sm md:text-base font-semibold text-amber-100 text-center">Lesson 10 has 12 words</p>
                        <div className="border text-center flex justify-center items-center text-xs text-white mt-4 border-purple-500 rounded-lg bg-gradient-to-l shadow-md shadow-purple-800 cursor-pointer from-violet-500 to-fuchsia-500">
                            <Link to={'/start-learning/Lesson_10'} className='py-2 px-3 '>Start Learning</Link>
                        </div>
                    </div>

                </div>
            </div>
            {/* tutorials */}
            <div className="min-h-screen w-11/12 mx-auto">
                <div data-aos="fade-up" className="text-transparent text-5xl font-bold bg-gradient-to-tr from-purple-800 to-pink-800 bg-clip-text text-center pb-20 w-fit mx-auto">Tutorials</div>
                <div className="grid md:grid-cols-2 gap-4 items-center justify-center ">
                    {
                        data.map((tutor, idx) =>
                            <div data-aos="fade-up" key={idx} div className="card mb-8 hover:shadow-md hover:shadow-purple-700 md:mb-0 card-compact border border-purple-700 w-full shadow-xl">
                                <figure>
                                    <iframe className='w-full h-[180px] md:h-[250px] lg:h-[300px]' width="560" height="315" src={tutor.video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </figure>
                                <div className="card-body">
                                    <h2 data-aos="fade-up" className="card-title text-white">Tutorial: {tutor.tutorial_number}</h2>
                                    <p data-aos="fade-up" className='card-title text-white'> Title: {tutor.title}</p>

                                </div>
                            </div>)
                    }
                </div>
                <div data-aos="fade-up" className="my-20 text-center p-1 border border-purple-700 rounded-lg w-fit mx-auto">
                    <Link className='btn btn-warning btn-wide text-lg font-semibold text-purple-700' to={'/tutorials'}>View More</Link>
                </div>
            </div>
        </div >
    );
};

export default SartLearning;