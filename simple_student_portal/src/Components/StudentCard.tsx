import { Link } from "react-router-dom";
import type { Student } from "../utils";

export default function StudentCard({id, name, studentClass}:Student) {
  return (
    <div className="card">
      <p>{name} ({studentClass})</p>
      <Link to={`/students/${id}`}>
        View Courses
      </Link>
    </div>
  )
}