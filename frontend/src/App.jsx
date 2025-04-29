import './App.css'
import Welcome from "./pages/Welcome/Welcome.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Auth/Login/Login.jsx";
import Register from "./pages/Auth/Register/Register.jsx";
import Student from "./pages/Main/Student/Student.jsx";
import AllCourses from "./pages/Main/Student/AllCourses/AllCourses.jsx";
import MainTeacher from "./pages/Main/MainTeacher.jsx";
import React from "react";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import Assigned from "./pages/Main/Student/Assigned/Assigned.jsx";
import Additional from "./pages/Main/Student/Additional/Additional.jsx";
import Completed from "./pages/Main/Student/Completed/Completed.jsx";

function App() {
    const isLoggedIn = window.localStorage.getItem("loggedin");
    const userType = window.localStorage.getItem("userType");

      return (
        <Routes>
            {!isLoggedIn && (
                <>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </>
            )}



                <Route element={<Student />}>
                    <Route path="/" element={<Student />} />
                    <Route path="/login" element={<Navigate to={'/'} />} />
                    <Route path="/register" element={<Navigate to={'/'} />} />
                    <Route path="/allcourses" element={<AllCourses />} />
                    <Route path="/assigned" element={<Assigned />} />
                    <Route path="/additional" element={<Additional />} />
                    <Route path="/completed" element={<Completed />} />
                </Route>


            {userType === 'teacher' && <Route element={<MainTeacher />}>
                <Route path="/main-teacher" element={<div>hjuh</div>} />
            </Route> }



            <Route path="*" element={<Navigate to={'/'} />} />

        </Routes>
      )
}

export default App
