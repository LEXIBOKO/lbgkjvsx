import React from 'react';
import CardsDisplay from "../../../../components/CardsDisplay/CardsDisplay.jsx";
import {getStudentCourses} from "../../../../entities/students.js";

const studentCourses = getStudentCourses();

// todo добавить заголовки
const Additional = () => {
    return (
        <div>
            <CardsDisplay data={studentCourses.additional}/>
        </div>
    );
};

export default Additional;
