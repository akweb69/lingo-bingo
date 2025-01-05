import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Dashboard from "../Components/Dashboard";
import Banner from "../Components/Banner";
import SartLearning from "../Components/SartLearning";
import Words from "../Components/Words";
import L2 from "../Pages/L2";
import Tutorials from "../Components/Tutorials";
import Auth from "../Components/Auth";
import Login from "../Components/Login";
import Register from "../Components/Register";
import About from "../Components/About";
import Blogs from "../Components/Blogs";
import Faq from "../Components/Faq";
import ErrorPage from "../Components/Erroe404.JSX";
import PrivateRout from "../Components/PrivateRout";
import ForgetPassword from "../Components/ForgetPassword";
import UpdateProfile from "../Components/UpdateProfile";
import StatsComponent from "../Components/StatsComponent";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Banner></Banner>
            },
            {
                path: '/start-learning',
                element: <SartLearning></SartLearning>,
                loader: () => fetch('/l1.json')

            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/statistics',
                element: <StatsComponent></StatsComponent>
            },
            {
                path: '/update_profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/tutorials',
                element: <PrivateRout><Tutorials></Tutorials></PrivateRout>
            },
            {
                path: '/auth',
                element: <Auth></Auth>,
                children: [
                    {
                        path: '/auth/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/auth/register',
                        element: <Register></Register>
                    },
                    {
                        path: '/auth/forgetPassword',
                        element: <ForgetPassword></ForgetPassword>
                    },

                ]
            },
            {
                path: '/start-learning/Lesson_01',
                element: <PrivateRout>
                    <Words></Words>
                </PrivateRout>,
                loader: () => fetch('/allData.json')

            },
            {
                path: '/start-learning/Lesson_02',
                element: <PrivateRout><L2></L2></PrivateRout>,
                loader: () => fetch('/allData.json')

            },
            {
                path: '/start-learning/Lesson_03',
                element: <PrivateRout><L2></L2></PrivateRout>,
                loader: () => fetch('/allData.json')

            },
            {
                path: '/start-learning/Lesson_04',
                element: <PrivateRout><L2></L2></PrivateRout>,
                loader: () => fetch('/allData.json')

            },
            {
                path: '/start-learning/Lesson_05',
                element: <PrivateRout><L2></L2></PrivateRout>,
                loader: () => fetch('/allData.json')

            },
            {
                path: '/start-learning/Lesson_06',
                element: <PrivateRout><L2></L2></PrivateRout>,
                loader: () => fetch('/allData.json')

            },
            {
                path: '/start-learning/Lesson_07',
                element: <PrivateRout><L2></L2></PrivateRout>,
                loader: () => fetch('/allData.json')

            },
            {
                path: '/start-learning/Lesson_08',
                element: <PrivateRout><L2></L2></PrivateRout>,
                loader: () => fetch('/allData.json')

            },
            {
                path: '/start-learning/Lesson_09',
                element: <PrivateRout><L2></L2></PrivateRout>,
                loader: () => fetch('/allData.json')

            },
            {
                path: '/start-learning/Lesson_10',
                element: <PrivateRout><L2></L2></PrivateRout>,
                loader: () => fetch('/allData.json')

            },
            ,
            {
                path: '/dashboard',
                element: <PrivateRout> <Dashboard></Dashboard></PrivateRout>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }

])



export default router;