import React from 'react';
import CardsDisplay from "../../../../components/CardsDisplay/CardsDisplay.jsx";
import {getAllCourses} from "../../../../entities/courses.js";

const allCourses = getAllCourses()


const AllCourses = () => {
    return (
        <div>
            <h2>Все курсы</h2>
            <CardsDisplay data={allCourses}/>
        </div>
    );
};

export default AllCourses;
