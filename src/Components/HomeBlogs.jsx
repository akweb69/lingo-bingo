import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const HomeBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    return (
        <div className="bg-[rgb(0,0,31)] ">
            <div data-aos="fade-right" className="text-transparent text-5xl font-bold bg-gradient-to-tr from-purple-800 to-pink-800 bg-clip-text text-center pt-20 pb-10 w-fit mx-auto">
                Blogs
            </div>
            <div className="w-11/12 mx-auto md:grid grid-cols-2 gap-6 sm:gap-10"> {/* Adjusted gap for small screens */}
                {
                    blogs.slice(0, 2).map((blog, idx) => (
                        <div key={idx} className="bg-[rgb(0,0,44)] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div id="author" data-aos="fade-right" className="flex justify-between items-center rounded-t-xl p-6 bg-gradient-to-r from-purple-700 to-purple-900">
                                <div className="flex gap-4 items-center">
                                    <img className="w-12 h-12 rounded-full object-cover border-2 border-purple-500" src={blog.author_img} alt={blog.author} />
                                    <div className="text-white">
                                        <p className="font-semibold text-lg">{blog.author}</p>
                                    </div>
                                </div>
                                <div className="text-white text-sm">
                                    {blog.postDate}
                                </div>
                            </div>
                            <div data-aos="fade-up" className="bg-[rgb(0,0,44)] p-4 rounded-b-xl">
                                <figure className="h-[200px] md:h-[350px] mb-4">
                                    <img className="w-full rounded-lg object-cover" src={blog.img} alt={blog.title} />
                                </figure>
                                <div className="text-white">
                                    <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                                    <p className="text-base mb-4">{blog.blogs}</p>
                                    <div className="flex justify-center">
                                        <Link to={`/blog/${blog.id}`} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="text-center my-10">
                <Link className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300" to={'/blogs'}>
                    View More
                </Link>
            </div>
        </div>
    );
};

export default HomeBlogs;
