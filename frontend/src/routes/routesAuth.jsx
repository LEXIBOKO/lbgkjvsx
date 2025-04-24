import React from 'react';
import {Route, Routes} from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import Main from "../pages/Main/Main.jsx";

const RoutesAuth = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/team" element={<Main />} />
        </Routes>
    );
};

export default RoutesAuth;
