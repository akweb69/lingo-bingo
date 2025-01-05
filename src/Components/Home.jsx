import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet"; // Import React Helmet
import Header from "./Header";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Lingo-Bingp</title>
            </Helmet>
            <div className="w-11/12 mx-auto">
                <Header></Header>
            </div>
            <header className="w-11/12 mx-auto">
                <Navbar />
            </header>

            <main className="min-h-screen">
                <Outlet />
            </main>

            <footer className="pt-20">
                <Footer />
            </footer>
        </div>
    );
};

export default Home;
