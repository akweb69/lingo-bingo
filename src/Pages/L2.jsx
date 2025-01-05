import React, { useState, useEffect, useContext } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from '../Components/Loading';

const L2 = () => {
    const [newData, setNewData] = useState([]);
    const [lesson, setLesson] = useState("");
    const data = useLoaderData();
    const location = useLocation();

    const [selectedWord, setSelectedWord] = useState(null);
    const [voices, setVoices] = useState([]);
    const [isVoicesLoaded, setIsVoicesLoaded] = useState(false);
    const [voiceType, setVoiceType] = useState("male");
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 200,   // Offset for triggering animations
        });
    }, []);

    useEffect(() => {
        setNewData(data.filter(newdata => newdata?.Lesson_no === 2));
        setLoading(false)
        setLesson("02");

        if (location.pathname === "/start-learning/Lesson_03") {
            setNewData(data.filter(newdata => newdata?.Lesson_no === 3));
            setLesson("03");
        }
        if (location.pathname === "/start-learning/Lesson_04") {
            setNewData(data.filter(newdata => newdata?.Lesson_no === 4));
            setLesson("04");
        }
        if (location.pathname === "/start-learning/Lesson_05") {
            setNewData(data.filter(newdata => newdata?.Lesson_no === 5));
            setLesson("05");
        }
        if (location.pathname === "/start-learning/Lesson_06") {
            setNewData(data.filter(newdata => newdata?.Lesson_no === 6));
            setLesson("06");
        }
        if (location.pathname === "/start-learning/Lesson_07") {
            setNewData(data.filter(newdata => newdata?.Lesson_no === 7));
            setLesson("07");
        }
        if (location.pathname === "/start-learning/Lesson_08") {
            setNewData(data.filter(newdata => newdata?.Lesson_no === 8));
            setLesson("08");
        }
        if (location.pathname === "/start-learning/Lesson_09") {
            setNewData(data.filter(newdata => newdata?.Lesson_no === 9));
            setLesson("09");
        }
        if (location.pathname === "/start-learning/Lesson_10") {
            setNewData(data.filter(newdata => newdata?.Lesson_no === 10));
            setLesson("10");
        }
    }, [data, location.pathname]);

    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = speechSynthesis.getVoices();
            setVoices(availableVoices);
            setIsVoicesLoaded(true);
        };

        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = loadVoices;
        }
        loadVoices();
    }, []);

    // Function to play pronunciation
    const playPronunciation = (text) => {
        if (!isVoicesLoaded) {
            alert("Voices are not loaded yet. Please wait.");
            return;
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';

        const selectedVoice = voices.find((voice) =>
            voiceType === "male" ? voice.name.includes("Male") : voice.name.includes("Female")
        ) || voices[0];

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        } else {
            console.warn("No suitable voice found. Using default settings.");
        }

        window.speechSynthesis.speak(utterance);
    };

    const openModal = (word) => {
        setSelectedWord(word);
        const modal = document.getElementById('my_modal_3');
        if (modal) {
            modal.showModal();
        }
    };

    const closeModal = () => {
        setSelectedWord(null);
        const modal = document.getElementById('my_modal_3');
        if (modal) {
            modal.close();
        }
    };

    return (
        <div className='py-10 w-11/12 mx-auto'>
            {/* Voice Toggle Section */}
            <div className="mb-6 flex items-center gap-4">
                <h2 data-aos="fade-right" className="md:text-xl font-bold mb-2 text-purple-600">Change the Voice : </h2>
                <div data-aos="fade-left" className="inline-flex items-center gap-4">
                    <button
                        className={`py-2 px-4 rounded-lg shadow ${voiceType === "male" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
                        onClick={() => setVoiceType("male")}
                    >
                        Male
                    </button>
                    <button
                        className={`py-2 px-4 rounded-lg shadow ${voiceType === "female" ? "bg-pink-500 text-white" : "bg-gray-300 text-gray-700"}`}
                        onClick={() => setVoiceType("female")}
                    >
                        Female
                    </button>
                </div>
            </div>

            {/* Lesson Section */}
            <div className="px-4">
                <h1 data-aos="fade-right" className="text-center text-2xl md:text-4xl lg:text-4xl font-bold text-transparent w-fit mx-auto bg-gradient-to-tr from-violet-500 to-fuchsia-500 bg-clip-text">Lesson {lesson}</h1>
            </div>
            <div data-aos="fade-left" className="text-center px-4 py-2 text-purple-100 md:text-lg">
                There are {newData.length} words to learn.
            </div>
            {
                loading ? <Loading></Loading> : <div className="md:grid grid-cols-2 lg:grid-cols-4 gap-4 py-10">
                    {
                        newData.map((word, idx) => (
                            <div data-aos="fade-up" className='' key={idx}>
                                <div className={`py-4 ${word.difficulty === "hard" ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""} mb-4 md:mb-2 p-4 rounded-lg shadow-md ${word.difficulty === "medium" ? "bg-gradient-to-r from-cyan-500 to-blue-500" : ""} shadow-purple-900 ${word.difficulty === "easy" ? "bg-gradient-to-r from-violet-500 to-fuchsia-500" : ""}`}>
                                    <h1 data-aos="fade-up" className="text-right text-white md:text-4xl text-2xl">{word.word}</h1>
                                    <p data-aos="fade-up" className="flex gap-4 item-center mt-5 text-white font-semibold capitalize md:text-lg"> Pronunciation: {word.pronunciation}

                                        <span data-aos="fade-up"
                                            className="flex  justify-center items-center p-1 rounded-full border border-purple-800 hover:bg-purple-800 cursor-pointer"
                                            onClick={() => playPronunciation(word.pronunciation)}
                                        >
                                            <HiOutlineSpeakerWave />
                                        </span>
                                    </p>

                                    <p data-aos="fade-up" className="text-purple-100 text-lg capitalize font-semibold">Meaning: {word.meaning}</p>
                                    <p data-aos="fade-up" className='text-gray-200 capitalize font-semibold md:text-lg'>Parts of speech: {word.part_of_speech}</p>
                                    <p data-aos="fade-up" className='text-red-200 font-semibold capitalize md:text-lg pb-4'>Difficulty: {word.difficulty}</p>
                                    <div data-aos="fade-up" className="text-center">
                                        <button data-aos="fade-up"
                                            className='py-2 px-4 rounded-lg shadow hover:bg-gradient-to-tl hover:text-white bg-gradient-to-tr'
                                            onClick={() => openModal(word)}
                                        >
                                            When To Say
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }

            {/* Modal */}
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box bg-gradient-to-tr from-purple-700 to-pink-600 shadow-md shadow-purple-600">
                    <form method="dialog">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                    </form>
                    {selectedWord ? (
                        <>
                            <h3 data-aos="fade-right" className="font-bold text-lg md:text-3xl py-2 text-white text-center">{selectedWord.word}</h3>
                            <p data-aos="fade-right" className='md:text-xl capitalize font-bold text-white'><strong >Meaning:</strong> {selectedWord.meaning}</p>
                            <p data-aos="fade-right" className='md:text-xl capitalize font-bold text-white'>When to Say :  {selectedWord.when_to_say}</p>
                            <p data-aos="fade-right" className='md:text-xl capitalize font-bold text-white'>Examples:</p>
                            <div data-aos="fade-right" className="py-2 text-green-200 font-semibold md:text-xl">
                                {
                                    selectedWord.example.map((exp, idx) => <div key={idx}>{exp}</div>)
                                }
                            </div>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </dialog>

            <div data-aos="fade-up" className="text-center">
                <Link to={'/start-learning'} className="btn btn-wide btn-accent text-lg my-10 text-center">
                    Back To Lesson
                </Link>
            </div>
        </div>
    );
};

export default L2;
