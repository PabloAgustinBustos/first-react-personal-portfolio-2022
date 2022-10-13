import React from 'react'
import {motion} from "framer-motion"
import s from "./styles.module.css"

const ProjectCard = ({id, name, tech, thumbnail}) => {
    return (
        <motion.div 
            whileHover={{
                cursor: "pointer",
                scale: 1.05
            }}

            className={s.card}
        >
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