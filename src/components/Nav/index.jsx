import { useState } from 'react'
import { NavLink, redirect, useLocation, useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"
import s from "./styles.module.css"
import { useEffect } from 'react'
import { useContext } from 'react'
import { MyContext } from '../GlobalStates'
import {navVariants} from './animations'

const Nav = () => {
    const {pathname} = useLocation()
    const {controls} = useContext(MyContext)
    const navigate = useNavigate()
    
    const [style, setStyle] = useState({
        nav: "navLight",
        link: "linkDark",
    })

    useEffect(() => {
        controls.start("visible")
    }, [])

    useEffect(() => {
        if(pathname === "/home" || pathname === "/proyectos"){
            setStyle({
                nav: "navLight",
                link: "linkDark",
                
            })       
        }else{
            setStyle({
                nav: "navDark",
                link: "linkLight",
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

    const handleClick = (e) => {
        e.preventDefault()
        let page = e.target.id
        
        if("/"+page === pathname) return
        
        controls.start("change")

        if(page === "skills" || page === "educacion"){
            controls.start("bgToLight")
            controls.start("navToDark")
        }else{
            controls.start("bgToDark")
            controls.start("navToLight")
        }

        e.target.style="text-decoration: underline"

        setTimeout(() => {
            const route = "/" + page
            navigate(route)

            e.target.style="text-decoration: none"
        }, 200)
    }

    if(pathname !== "/"){
        return (
            <motion.nav className={`${s.nav} ${s[style.nav]}`} variants={navVariants} custom={"toDark"} animate={controls}>
                <motion.div className={s.itemContainer}>
                    <motion.div 
                        variants={navVariants}
                        initial="hidden"
                        animate={controls}
                        custom= "1"
                    >
                        <NavLink onClick={handleClick} className={`${s.link} ${s[style.link]}`} style={handleTextDecoration} to="/home">
                            <motion.span id="home" variants={navVariants} animate={controls} className={`${s.link}`}>Home</motion.span>
                        </NavLink>
                    </motion.div>

                    <motion.div 
                        variants={navVariants}
                        initial="hidden"
                        animate={controls}
                        custom= "1.2"
                    >
                        <NavLink onClick={handleClick} className={`${s.link} ${s[style.link]}`} style={handleTextDecoration} to="/skills">
                            <motion.span id="skills" variants={navVariants} animate={controls} className={`${s.link}`}>Skills</motion.span>
                        </NavLink>
                    </motion.div>

                    <motion.div 
                        variants={navVariants}
                        initial="hidden"
                        animate={controls}
                        custom= "1.4"
                    >
                        <NavLink onClick={handleClick} className={`${s.link} ${s[style.link]}`} style={handleTextDecoration} to="/proyectos">
                            <motion.span id="proyectos" variants={navVariants} animate={controls} className={`${s.link}`}>Proyectos</motion.span>
                        </NavLink>
                    </motion.div>

                    <motion.div 
                        variants={navVariants}
                        initial="hidden"
                        animate={controls}
                        custom= "1.6"
                    >
                        <NavLink onClick={handleClick} className={`${s.link} ${s[style.link]}`} style={handleTextDecoration} to="/educacion">
                            <motion.span id="educacion" variants={navVariants} animate={controls} className={`${s.link}`}>Educación</motion.span>
                        </NavLink>
                    </motion.div>
                </motion.div>
            </motion.nav>
        )
    }else{
        return null
    }

}

export default Nav
