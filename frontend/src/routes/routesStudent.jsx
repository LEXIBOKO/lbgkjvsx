import {Route, Routes} from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome.jsx";
import Login from "../pages/Auth/Login/Login.jsx";
import Register from "../pages/Auth/Register/Register.jsx";
import Student from "../pages/Main/Student/Student.jsx";
import MainTeacher from "../pages/Main/MainTeacher.jsx";
import React from "react";
import AllCourses from "../pages/AllCourses/AllCourses.jsx";

const RoutesStudent = () => {
    return (
        <Routes>
            <Route path="/allcourses" element={<AllCourses />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mains" element={<Student />} />
            <Route path="/maint" element={<MainTeacher />} />
        </Routes>
    );
};

export default RoutesStudent;
