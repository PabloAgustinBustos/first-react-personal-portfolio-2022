import React from 'react'
import { motion } from 'framer-motion'
import s from "./styles.module.css"
import {courses} from "../../utils"

const Educacion = () => {
    console.log(courses)
    return (
        <motion.main className={s.container}>
            <section className={s.titleContainer}>
                <h1>Educación</h1>
            </section>

            <section className={s.certificatesContainer}>
                <div className={s.totalCertificates}>
                    <span className={s.number}>{courses.length}</span>
                    <span className={s.concept}>Cursos</span>
                </div>
                
                <ul className={s.list}>
                    {courses.map(c =>(
                        <li className={s.item}>
                            <span className={s.certificate}>{c.title}</span> / 
                            <span className={s.institution}>{c.institution}</span> - <br/>
                            <span className={s.progress}>{c.progress}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </motion.main>
    )
}

export default Educacion
