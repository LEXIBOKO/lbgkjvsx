import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import AllCourses from "../pages/Main/Student/AllCourses/AllCourses.jsx";
import Assigned from "../pages/Main/Student/Assigned/Assigned.jsx";
import Additional from "../pages/Main/Student/Additional/Additional.jsx";
import Completed from "../pages/Main/Student/Completed/Completed.jsx";
import CoursePage from "../pages/CoursePage/CoursePage.jsx";

const StudentRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AllCourses />} />
                <Route path="/allcourses" element={<AllCourses />} />
                <Route path="/assigned" element={<Assigned />} />
                <Route path="/additional" element={<Additional />} />
                <Route path="/completed" element={<Completed />} />
                <Route path="/:id" element={<CoursePage />} />

                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
        </>
    );
};

export default StudentRoutes;
