import React from 'react';
import CardsDisplay from "../../../../components/CardsDisplay/CardsDisplay.jsx";
import {getStudentCourses} from "../../../../entities/students.js";

const studentCourses = getStudentCourses();

const Completed = () => {
    return (
        <div>
            <CardsDisplay data={studentCourses.completed}/>
        </div>
    );
};

export default Completed;
