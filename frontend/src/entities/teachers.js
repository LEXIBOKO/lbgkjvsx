import {db} from "./db.js";

export const getTeacherInfo = () => {
    return db.teachers[0];
}

export const getTeacherCourses = () => {
    return db.teachers[0].teacherCourses;
}
