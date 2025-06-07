import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './Pages/Welcome'
import Error from './Pages/Error'
import Contact from './Pages/Contact'
import Github from './Pages/Github'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Welcome/>}
        />
        <Route
          path='/contact-book'
          element={<Contact/>}
        />
        <Route
          path='/github-search'
          element={<Github/>}
        />
        <Route
          path='*'
          element={<Error/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
