import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getAllStudentsByQuery } from "../helper";
import type { Student } from "../utils";
import StudentCard from "../Components/StudentCard";


export default function Search() {

  const [searchParams] = useSearchParams();
  const [ students, setStudents ] = useState<Student[]>([]);

  let query = searchParams.get("q") ? searchParams.get("q") as string : ""


  useEffect(()=>{
    getAllStudentsByQuery(query).then(setStudents);
  },[])

  return (
    <div>
      {students.map(student=> <StudentCard key={student.id} {...student}/>)}
    </div>
  )
}