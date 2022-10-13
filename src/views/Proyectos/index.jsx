import React from 'react'
import { motion } from 'framer-motion'
import s from "./styles.module.css"
import ProjectCard from '../../components/ProjectCard'
import {projects} from "../../utils"
import {stats} from "../../utils"

const Proyectos = () => {    
    return (
        <motion.main className={s.container}>
            <section className={s.title}>
                <h1 className={s.texto}>Vengo trabajando con un total de <span className={s.fast}>{stats.projects} PROYECTOS</span> <span className={s.hide}>{stats.projects} PROYECTOS</span></h1>
            </section>

            <section className={s.projects}>
                <div className={s.cards}>
                    {projects.map(p => (
                        <ProjectCard 
                            key={p.id}
                            id={p.id}
                            thumbnail={p.thumbnail}
                            name={p.name} 
                            tech={p.techStack.cardList}
                        />
                    ))}
                </div>
            </section>
        </motion.main>
    )
}

export default Proyectos
