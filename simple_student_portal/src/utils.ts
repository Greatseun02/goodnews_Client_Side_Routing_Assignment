import type { Dispatch, SetStateAction } from "react";

export type Student = {
    id: number;
    name: string;
    studentClass: string;
    enrolledCourseIds: number[];
};

export type Course = {
    id: number;
    name: string;
    description: string[];
};

export type StudentCourseData = {
    students: Student[];
    courses: Course[];
}

export type studentAndCourses = {
    studentId?: number;
    studentName?: string;
    course?: Course[];
}

export type setState<T> = Dispatch<SetStateAction<T>>;