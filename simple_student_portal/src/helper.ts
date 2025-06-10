import type { Student, studentAndCourses, StudentCourseData } from "./utils";
import data from "../data.json"

export async function getAllStudents(){
    try{
        const studentsAndCourse:StudentCourseData = data;

        return studentsAndCourse.students as Student[];
    }catch(e){
        console.error(e);
        return []
    }
}

export async function getAllStudentsByQuery(query:string | ""){
    try{
        const studentsAndCourse:StudentCourseData = data;

        const filteredStudents = studentsAndCourse.students.filter(student => student.name.toLowerCase().includes(query.toLowerCase())); 
        return filteredStudents as Student[];
    }catch(e){
        console.error(e);
        return []
    }
}

export async function getStudentAndCourses(studentId:number){
    try{
        const studentsAndCourse:StudentCourseData = data;

        const student = studentsAndCourse.students.find((student)=>studentId === student.id);

        const studentCourse = studentsAndCourse.courses.filter(course=> student?.enrolledCourseIds.includes(course.id));

        return {
            studentId: student?.id,
            studentName: student?.name,
            course: studentCourse
        } as studentAndCourses

    }catch(e){
        console.error(e);
        return {

        } as studentAndCourses
    }
}

export async function getCourse(courseId: number){
    try{
        const studentsAndCourse:StudentCourseData = data;

        const course = studentsAndCourse.courses.find(course => course.id === courseId);

        return course;
    }catch(e){
        console.error(e);
    }
}