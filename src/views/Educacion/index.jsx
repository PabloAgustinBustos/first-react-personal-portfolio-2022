import React from 'react'
import { motion } from 'framer-motion'
import s from "./styles.module.css"
import {courses} from "../../utils"
import { useEffect } from 'react'
import { useRef } from 'react'
import { allCircleVariant, backgroundVariants, circleVariants, liVariants, titleVariants } from './animations'
import { useContext } from 'react'
import { MyContext } from '../../components/GlobalStates'

const Educacion = () => {
    const circle = useRef()
    const {controls} = useContext(MyContext)
    
    useEffect(() => {
        controls.start("visible")

        const {current} = circle

        let angle = 0;
        let speed = 2;

        setTimeout(() => {
            let progress = setInterval(() => {
                angle++;
    
                current.style = `
                    background: conic-gradient(
                        #000917 ${angle}deg,
                        #4B89DC ${angle}deg
                    )
                `
                        console.log("ejecutando")
                if(angle === 360){
                    clearInterval(progress)
                }
            }, speed)
        }, 500)
        
    }, [])

    return (
        <motion.main variants={backgroundVariants} custom={"toLight"} animate={controls} className={s.container}>
            <motion.section className={s.titleContainer}>
                <motion.h1 className={s.texto} variants={titleVariants} initial="hidden" animate={controls}>Educación</motion.h1>
            </motion.section>

            <section className={s.certificatesContainer}>
                <motion.div variants={allCircleVariant} animate={{controls}} className={s.totalCertificates} ref={circle}>
                    <motion.div variants={circleVariants} initial={{opacity: 0}} animate={controls} className={s.content}>
                        <span className={s.number}>{courses.length}</span>
                        <span className={s.concept}>Cursos</span>
                    </motion.div>
                </motion.div>
                
                <ul className={s.list}>
                    {courses.map((c, index, array) =>(
                        <motion.li variants={liVariants} initial="hidden" animate={controls} custom={{id: c.id, number: array.length}} key={c.id} className={s.item}>
                            <span className={s.certificate}>{c.title}</span> / 
                            <span className={s.institution}>{c.institution}</span> - <br/>
                            <span className={s.progress}>{c.progress}</span>
                        </motion.li>
                    ))}
                </ul>
            </section>
        </motion.main>
    )
}

export default Educacion
