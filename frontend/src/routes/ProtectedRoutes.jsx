import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoutes = () => {
    const isLoggedIn = window.localStorage.getItem("loggedin");

    return isLoggedIn === 'true' ? (<Outlet />) : (<Navigate to={'/welcome'} />)
};

export default ProtectedRoutes;
