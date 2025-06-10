import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getCourse } from "../helper";
import type { Course } from "../utils";
import { IoBackspace } from "react-icons/io5";


export default function StudentCourse() {
  const { studentId, courseId } = useParams();
  const [course, setCourse] = useState<Course>();

  const navigate = useNavigate();

  useEffect(()=>{
    const courseIdAsNumber = Number(courseId);
    if(!isNaN(courseIdAsNumber)){
      getCourse(courseIdAsNumber).then(setCourse);
    }
  }, [])

  function handleClick(){
    navigate(`/students/${studentId}`)
  }

  return (
    <div className="student-course">
        <h2>{course?.name}</h2>
        {
          course?.description.map(desc=> <p>{desc}</p>)
        }
        <button onClick={handleClick}>
          <IoBackspace/> Back
        </button>
    </div>
  )
}
