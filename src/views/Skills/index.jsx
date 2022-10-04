import React from 'react'
import { motion } from 'framer-motion'
import s from "./styles.module.css"
import Button from '../../components/Button'
import Posit from '../../components/Posit'

const Skills = () => {
    return (
        <motion.main className={s.container}>
            {/* <Button text="asdsad" form="bgLight"/> */}
            <motion.section className={s.frontSection}>
                <h1 className={s.text}>Me gusta trabajar con un total de <span>13 TECH SKILLS</span> y cada vez va incrementando</h1>

                <div className={s.positContainer}>
                    <Posit tech="front"/>
                    <Posit tech="back"/>
                    <Posit tech="agile"/>
                </div>
            </motion.section>
            
            <motion.section className={s.softSection}>
                <h1 className={s.text}>Además de contar con <span>6 SOFT SKILLS</span></h1>

                <div className={s.info}>
                    <section className={s.buttons}>
                        <Button text="Autodidacta" form="bgLight"/>
                        <Button text="Flexible" form="bgLight"/>
                        <Button text="Curioso" form="bgLight"/>
                        <Button text="Trabajo en equipo" form="bgLight"/>
                        <Button text="Organizado" form="bgLight"/>
                        <Button text="Versátil" form="bgLight"/>
                    </section>

                    <div className={s.descriptionContainer}>
                        <p className={s.p}>Una de las características que más destaco de mi persona es el aprender por mi propia cuenta.</p>
                        <p className={s.p}>Me considero un estudiante eterno, tanto de programación como de la vida, todo lo que aprendo, lo aplico.</p>
                        <p className={s.p}>Me gusta mucho ver cursos de distintas cosas. Siempre tuve facilidad para tomar el control de mi propia educación y no depender de una institución que me enseñe.</p>
                    </div>
                </div>
            </motion.section>
        </motion.main>
    )
}

export default Skills
