import { motion } from 'framer-motion'
import React from 'react'
import s from "./styles.module.css"
import profilePhoto from "../../assets/img/pp.jpg"
import linkedinLogo from "../../assets/icons/linkedin.png"
import githubLogo from "../../assets/icons/github.png"
import Button from '../../components/Button'
import {stats} from "../../utils"
import { backgroundVariants, buttonVariants, descriptionVariants, githubVariants, imageVariants, linkedinVariants, marcoVariants, nameVariants, profesionVariants, sectionVariants } from './animations'
import { useContext } from 'react'
import { MyContext } from '../../components/GlobalStates'
import { useEffect } from 'react'
import { useState } from 'react'
import Modal from '../../components/Modal'

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const {controls} = useContext(MyContext)

    return (
        <motion.main className={s.containerFlex} variants={backgroundVariants} custom={"toLight"} animate={controls}>
            <div className={s.container}>
                <motion.section className={s.left} variants={sectionVariants} custom={"left"} animate={controls}>
                    <motion.img 
                        className={s.image} 
                        src={profilePhoto}
                        variants={imageVariants}
                        initial="hidden"
                        // animate="visible"
                        animate={controls}
                        transition={imageVariants.transition}
                    />

                    <div className={s.marco}>
                        <motion.section 
                            className={s.stats} 
                            variants={marcoVariants}
                            initial="hidden"
                            // animate="visible"
                            animate={controls}
                            transition={marcoVariants.transition}
                        >
                            <div className={s.stat}>
                                <span className={s.statNumber}>{stats.skills}</span>
                                <span className={s.statConcept}>skills</span>
                            </div>
                            <div className={s.stat}>
                                <span className={s.statNumber}>{stats.projects}</span>
                                <span className={s.statConcept}>proyectos</span>
                            </div>
                            <div className={s.stat}>
                                <span className={s.statNumber}>{stats.courses}</span>
                                <span className={s.statConcept}>cursos</span>
                            </div>
                        </motion.section>

                    </div>
                    
                    <section className={s.social}>
                        <motion.a  
                            href="https://www.linkedin.com/in/pablo-bustos-/" 
                            variants={linkedinVariants} 
                            initial="hidden" 
                            // animate="visible" 
                            animate={controls}
                            transition={linkedinVariants.transition}
                        >                                
                            <img className={s.icon} src={linkedinLogo}/>
                        </motion.a>

                        <motion.a 
                            href="https://github.com/PabloAgustinBustos" 
                            variants={githubVariants} 
                            initial="hidden" 
                            // animate="visible" 
                            animate={controls}
                            transition={githubVariants.transition}
                        >
                            <img className={s.icon} src={githubLogo}/>
                        </motion.a>
                    </section>
                </motion.section>

                <motion.section className={s.right} variants={sectionVariants} animate={controls}>
                    <div className={s.me}>
                        <motion.h1 
                            className={s.name} 
                            variants={nameVariants} 
                            initial="hidden" 
                            // animate="visible" 
                            animate={controls}
                            transition={nameVariants.transition}
                        >Pablo Bustos</motion.h1>

                        <motion.div 
                            className={s.profesion} 
                            variants={profesionVariants} 
                            initial="hidden" 
                            // animate="visible" 
                            animate={controls}
                            transition={profesionVariants.transition}
                        >Desarrollador full-stack</motion.div>
                    </div>

                    <motion.div 
                        className={s.descriptionContainer}
                        variants={descriptionVariants}
                        initial="hidden"
                        // animate="visible"
                        animate={controls}
                        transition={descriptionVariants.transition}
                    >
                        <p className={s.description}>Soy desarrollador de software muy apasionado por la tecnología y los lenguajes de programación.</p>
                        <p className={s.description}>Me gusta adquirir nuevas herramientas del mundo de la informática a medida que voy trabajando y ganando experiencia, ya sea solo o en conjunto con un equipo.</p>
                        <p className={s.description}>Mi objetivo es cambiar el mundo desde mi lugar como desarrollador, instalar nuevas ideas, aportar creatividad y productividad en los proyectos para lograr resultados eficientes y eficaces.</p>
                    </motion.div>

                    <Button controls={controls} variants={buttonVariants} onClick={() => setShowModal(true)} text="Ver trayectoria" form="bgDark"/>
                </motion.section>
            </div>

            {showModal && <Modal setShowModal={setShowModal}/>}
        </motion.main>
    )
}

export default Home
