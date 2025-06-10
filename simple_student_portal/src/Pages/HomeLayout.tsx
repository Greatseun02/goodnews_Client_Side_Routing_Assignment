import { Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function HomeLayout() {
  return (
    <div id="home-layout">
      <div className="home-layout-container">
        <header className="header">
          <h5 className="header-h1"><FaHome/> Home</h5>
        </header>
        <div className="home-outlet">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}