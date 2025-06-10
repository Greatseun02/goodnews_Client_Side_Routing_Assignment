import { useState, useEffect } from "react"
import type { Student } from "../utils"
import StudentCard from "../Components/StudentCard";
import { getAllStudents } from "../helper";
import { useNavigate } from "react-router-dom";
import { IoBackspace } from "react-icons/io5";

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(
    ()=>{
      getAllStudents().then(setStudents);
    },[]
  )
  const navigate = useNavigate();
  function handleClick(){
    navigate(`/`);
  }

  return (
    <>
      <h2 className="header-cards">All Students</h2>
 
      <div className="card-container">
          {    
            students.map(student => <StudentCard key={student.id} {...student}/>)
          }
      </div>
      <button className="nav-button" onClick={handleClick}>
        <IoBackspace/> Back
      </button>
    </>
  )
}
