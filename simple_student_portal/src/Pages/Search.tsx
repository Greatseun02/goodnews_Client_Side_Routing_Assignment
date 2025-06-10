import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { getAllStudentsByQuery } from "../helper";
import type { Student } from "../utils";
import StudentCard from "../Components/StudentCard";
import { IoBackspace } from "react-icons/io5";


export default function Search() {

  const [searchParams] = useSearchParams();
  const [ students, setStudents ] = useState<Student[]>([]);

  let query = searchParams.get("q") ? searchParams.get("q") as string : ""


  useEffect(()=>{
    getAllStudentsByQuery(query).then(setStudents);
  },[])

  const navigate = useNavigate();

  function handleClick(){
    navigate(`/`)
  }

  return (
    <>
      <h2 className="header-cards">Search Results</h2>
      <div className="card-container">
        {students.map(student=> <StudentCard key={student.id} {...student}/>)}
      </div>
      <button className="nav-button" onClick={handleClick}>
        <IoBackspace/> Back
      </button>
    </>
  )
}