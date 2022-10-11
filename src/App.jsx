import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {motion} from "framer-motion"
import Nav from './components/Nav'
import Home from './views/Home'
import Skills from './views/Skills'
import Proyectos from './views/Proyectos'
import Educacion from './views/Educacion'

function App() {
  let {pathname} = window.location
  
  if(pathname === "/"){
    window.location.href = "/home";
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>

        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/proyectos' element={<Proyectos/>}/>
          <Route path='/educacion' element={<Educacion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )  
}

export default App
