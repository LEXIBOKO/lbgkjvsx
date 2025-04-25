import {db} from "./db.js";

export const getStudentInfo = () => {
    return db.students[0];
}

export const getStudentCourses = () => {
    return db.students[0].courses;
}

