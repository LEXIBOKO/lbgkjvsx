import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import TeacherCourses from "../pages/Main/Teacher/AllCourses/TeacherCourses.jsx";
import CourseEditorPage from "../pages/Main/Teacher/CourseEditorPage/CourseEditorPage.jsx";
import AllCourses from "../pages/Main/Student/AllCourses/AllCourses.jsx";
import CoursePage from "../pages/CoursePage/CoursePage.jsx";

const TeacherRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<TeacherCourses />} />
                <Route path="/teachercourses" element={<TeacherCourses />} />
                <Route path="/allcourses" element={<AllCourses />} />
                <Route path="/createcourse" element={<CourseEditorPage />} />
                <Route path="/:id" element={<CoursePage />} />

                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
        </>
    );
};

export default TeacherRoutes;
