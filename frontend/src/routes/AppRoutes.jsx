import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const StudentRoutes = () => {
    const isLoggedIn = window.localStorage.getItem("loggedin");
    const userType = window.localStorage.getItem("userType");

    return userType === 'student' ? (<Outlet />) : (<Navigate to={'/welcome'} />)
};

export default StudentRoutes;
