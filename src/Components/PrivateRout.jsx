import React, { useContext } from 'react';
import { ContextData } from '../DataProvider/ContextProviderData';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';

const PrivateRout = ({ children }) => {
    const location = useLocation();
    console.log(location);
    const { user, loading } = useContext(ContextData);
    if (loading) {
        return <Loading></Loading>
    }

    if (user && user.email) {
        return children;
    }


    return (
        <Navigate state={location.pathname} replace={true} to={"/auth/login"}></Navigate>
    );
};

export default PrivateRout;