import { useState } from "react";
import { Link } from "react-router-dom";
import { RiGraduationCapFill } from "react-icons/ri";
import { GiBookshelf } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";


export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <div className="home">
      <h1 className="home-header">
        <RiGraduationCapFill/> Student Portal
      </h1>

      <div className="home-link-container">
        <Link to="/students">
          <GiBookshelf/> View all students
        </Link>
        <div className="home-search">
          <input 
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
          />
          <Link to={
            query && query.trim() !== "" ?
            {
              pathname: "/search",
              search: `?q=${query}`
            } : "/"
        }

          ><IoSearch /> Search</Link>
        </div>
      </div>
    </div>
  )
}
