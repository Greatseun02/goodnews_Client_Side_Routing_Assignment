import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import HomeLayout from './Pages/HomeLayout'
import Students from './Pages/Students'
import Search from './Pages/Search'
import StudentCourse from './Pages/StudentCourse'
import Student from './Pages/Student'
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/students/:studentId' element={<Student/>}/>
          <Route path='/students/:studentId/courses/:courseId' element={<StudentCourse/>}/>
          <Route path='/search' element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
