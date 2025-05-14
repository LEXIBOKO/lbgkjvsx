import React from 'react';
import CardsDisplay from "../../../../components/CardsDisplay/CardsDisplay.jsx";
import {getTeacherCourses} from "../../../../entities/teachers.js";

const teacherCourses = getTeacherCourses()

const TeacherCourses = () => {
    return (
        <div>
            <h2>Мои курсы</h2>
            <CardsDisplay data={teacherCourses}/>
        </div>
    );
};

export default TeacherCourses;
