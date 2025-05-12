import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import AllCourses from "../pages/Main/Student/AllCourses/AllCourses.jsx";
import Assigned from "../pages/Main/Student/Assigned/Assigned.jsx";
import Additional from "../pages/Main/Student/Additional/Additional.jsx";
import Completed from "../pages/Main/Student/Completed/Completed.jsx";
import TeacherCourses from "../pages/Main/Teacher/AllCourses/TeacherCourses.jsx";

const TeacherRoutes = () => {
    return (
        <>
            <Routes>
                {/*<Route path="/" element={<Student />} />*/}
                <Route path="/teachercourses" element={<TeacherCourses />} />
                {/*<Route path="/assigned" element={<Assigned />} />*/}


                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
        </>
    );
};

export default TeacherRoutes;
