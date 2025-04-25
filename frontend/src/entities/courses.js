import {db} from "./db.js";

export const getAllCourses = () => {
    return db.allCourses
}
