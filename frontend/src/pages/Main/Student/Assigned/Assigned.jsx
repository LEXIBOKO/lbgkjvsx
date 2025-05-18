import React from 'react';
import CardsDisplay from "../../../../components/CardsDisplay/CardsDisplay.jsx";
import {getStudentCourses} from "../../../../entities/students.js";

const studentCourses = getStudentCourses();

const Assigned = () => {
    return (
        <div>
            <h1>Обязательные</h1>
            <CardsDisplay hasProgress={true} data={studentCourses.assigned}/>
        </div>
    );
};

export default Assigned;
