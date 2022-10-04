import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {motion} from "framer-motion"
import s from "./styles.module.css"
import { useEffect } from 'react'

const Nav = () => {
    const {pathname} = useLocation()
    
    const [color, setColor] = useState({
        nav: "navLight",
        link: "linkDark"
    })

    useEffect(() => {
        if(pathname === "/home" || pathname === "/proyectos"){
            setColor({
                nav: "navLight",
                link: "linkDark"
            })       
        }else{
            setColor({
                nav: "navDark",
                link: "linkLight"
            })       
        }
    }, [pathname])

    const handleTextDecoration = ({isActive}) => {
        if(isActive){
            return {
                textDecoration: "underline"
            }
        }
    }

    return (
        <motion.nav className={`${s.nav} ${s[color.nav]}`}>
            <motion.div className={s.itemContainer}>
                <NavLink className={`${s.link} ${s[color.link]}`} style={handleTextDecoration} to="/home">Home</NavLink>
                <NavLink className={`${s.link} ${s[color.link]}`} style={handleTextDecoration} to="/skills">Skills</NavLink>
                <NavLink className={`${s.link} ${s[color.link]}`} style={handleTextDecoration} to="/proyectos">Proyectos</NavLink>
                <NavLink className={`${s.link} ${s[color.link]}`} style={handleTextDecoration} to="/educacion">Educación</NavLink>
            </motion.div>
        </motion.nav>
    )
}

export default Nav
