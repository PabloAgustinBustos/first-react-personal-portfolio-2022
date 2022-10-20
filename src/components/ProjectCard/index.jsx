import React from 'react'
import {motion} from "framer-motion"
import s from "./styles.module.css"
import { projectVariants } from '../../views/Proyectos/animations'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const ProjectCard = ({id, actualId, onClick, controls, name, tech, thumbnail}) => {
    const navigate = useNavigate()

    const handleClick = e => {
        controls.start("showProject")
        setTimeout(() => {
            navigate("/proyectos/"+id)
        }, 200)
    }

    return (
        <motion.div 
            variants={projectVariants}

            initial={{
                opacity: 0,
                scale: .5
            }}

            custom={id}

            whileHover={{
                cursor: "pointer",
                scale: 1.05
            }}

            onHoverEnd = {() => {
                controls.start("normal")
            }}

            className={s.card}
        >
            <div className={s.trigger} id={id} onClick={handleClick}></div>
            <section className={s.img}>
                <img src={thumbnail}/>
            </section>
            <section className={name.length <= 7 ? s.infoRow : s.infoColumn}>
                <section className={name.length <= 7 ? s.left : s.up}>
                    <h2 className={s.name}>{name}</h2>
                </section>
                <section className={name.length <= 7 ? s.right : s.down}>
                    {tech.map(src => <img key={src} className={s.tech} src={src}/>)}
                </section>
            </section>
        </motion.div>
    )
}

export default ProjectCard