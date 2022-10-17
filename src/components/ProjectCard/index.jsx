import React from 'react'
import {motion} from "framer-motion"
import s from "./styles.module.css"
import { projectVariants } from '../../views/Proyectos/animations'

const ProjectCard = ({id, onClick, controls, name, tech, thumbnail}) => {
    return (
        <motion.div 
            variants={projectVariants}

            initial={{
                opacity: 0,
                scale: .5
            }}

            animate={controls}

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
            <div className={s.trigger} onClick={onClick} id={id}></div>
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