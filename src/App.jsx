import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {motion} from "framer-motion"
import Nav from './components/Nav'
import Home from './views/Home'
import Skills from './views/Skills'
import Proyectos from './views/Proyectos'
import Educacion from './views/Educacion'
import GlobalStates from './components/GlobalStates'
import Proyecto from './views/Proyecto'

function App() {
  let {pathname} = window.location
  
  if(pathname === "/"){
    window.location.href = "/home";
  }

  let onMobile = (window.screen.width > 360) && (window.screen.width < 767)

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStates>
          <Nav/>
          
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/proyectos' element={<Proyectos/>}/>
            <Route path='/proyectos/:id' element={<Proyecto/>}/>
            <Route path='/educacion' element={<Educacion/>}/>
          </Routes>

          {/* {onMobile && <Nav/>} */}
        </GlobalStates>
      </BrowserRouter>
    </div>
  )  
}

export default App
