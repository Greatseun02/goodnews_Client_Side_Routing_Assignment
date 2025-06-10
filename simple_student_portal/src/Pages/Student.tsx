import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getStudentAndCourses } from "../helper";
import type { studentAndCourses } from "../utils";

export default function Student() {
  const { studentId } = useParams();
  const [studentAndCourses, setStudentAndCourses] = useState<studentAndCourses>({});

  useEffect(
    ()=>{
      const studentIdAsNumber = Number(studentId);
      if(!isNaN(studentIdAsNumber)){
        getStudentAndCourses(studentIdAsNumber).then(setStudentAndCourses);
      }
    }, []
  )

  return (
    <>
      <h2 className="header-cards">Courses for {studentAndCourses.studentName}</h2>
      <div className="card-container">
        {
          studentAndCourses.course?.map((course) => <div key={course.id} className="card">
            <p>{course.name}</p>
            <Link to={`/students/${studentId}/courses/${course.id}`}>View Details</Link>
          </div>)
        }
      </div>
    </>
  )
}