import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";

const Blogs = () => {
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
        <div className="bg-gray-100 py-12">
            <Helmet>
                <title>Blogs | Lingo-Bingp</title>
            </Helmet>
            <div data-aos="fade-right" className="text-transparent text-5xl font-bold bg-gradient-to-tr from-purple-800 to-pink-800 bg-clip-text text-center  pb-10 w-fit mx-auto">
                Blogs
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, idx) => (
                    <div key={idx} data-aos="fade-up" className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300">
                        <div className="relative">
                            <img className="w-full h-56 object-cover rounded-t-lg" src={blog.img} alt={blog.title} />
                            <div className="absolute top-4 left-4 flex items-center gap-3 bg-opacity-75 bg-black text-white p-2 rounded-full">
                                <img className="w-8 h-8 rounded-full" src={blog.author_img} alt={blog.author} />
                                <p className="text-sm">{blog.author}</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{blog.title}</h3>
                            <p className="text-gray-600 text-sm mb-6">{blog.blogs.substring(0, 150)}...</p>
                            <div className="flex justify-between items-center">
                                <p className="text-xs text-gray-500">{blog.postDate}</p>
                                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:opacity-90 transition-all duration-200">Read More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
