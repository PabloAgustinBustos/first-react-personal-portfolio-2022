import React from 'react'
import { motion } from 'framer-motion'
import s from "./styles.module.css"
import ProjectCard from '../../components/ProjectCard'
import {projects} from "../../utils"
import {stats} from "../../utils"
import { useContext } from 'react'
import { MyContext } from '../../components/GlobalStates'
import { backgroundVariants, titleVariants } from './animations'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Proyectos = () => {    
    const {controls} = useContext(MyContext)

    useEffect(() => {
        controls.start("visible")
    }, [])

    return (
        <motion.main variants={backgroundVariants} custom={"toLight"} animate={controls} className={s.container}>
            
            <motion.section variants={titleVariants} initial="hidden" animate={controls} className={s.title}>
                <h1 className={s.texto}>Vengo trabajando con un total de <span className={s.fast}>{stats.projects} PROYECTOS</span> <span className={s.hide}>{stats.projects} PROYECTOS</span></h1>
            </motion.section>

            <section className={s.projects}>
                <div className={s.cards}>
                    {projects.map(p => (
                        <ProjectCard 
                            key={p.id}
                            id={p.id}
                            controls={controls}
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
