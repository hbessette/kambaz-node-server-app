import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const enrollment = { _id: uuidv4(), user: userId, course: courseId };
    enrollments.push(enrollment);
    return enrollment;
}
export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((enrollment) => !(enrollment.user === userId && enrollment.course === courseId));
}
export function findEnrollments() {
    const { enrollments } = Database;
    return enrollments;
}