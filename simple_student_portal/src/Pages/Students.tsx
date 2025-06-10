import { useState, useEffect } from "react"
import type { Student } from "../utils"
import StudentCard from "../Components/StudentCard";
import { getAllStudents } from "../helper";

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(
    ()=>{
      getAllStudents().then(setStudents);
    },[]
  )

  return (
    <>
      <h2 className="header-cards">All Students</h2>
 
      <div className="card-container">
          {    
            students.map(student => <StudentCard key={student.id} {...student}/>)
          }
      </div>
    </>
  )
}
