import { motion } from 'framer-motion'
import React from 'react'
import s from "./styles.module.css"
import profilePhoto from "../../assets/img/pp.jpg"
import linkedinLogo from "../../assets/icons/linkedin.png"
import githubLogo from "../../assets/icons/github.png"
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const Home = () => {
    return (
        <motion.main className={s.containerFlex}>
            <motion.div className={s.container}>
                <motion.section className={s.left}>
                    <motion.img className={s.image} src={profilePhoto}/>

                    <motion.div className={s.marco}>
                        <motion.section className={s.stats}>
                            <motion.div className={s.stat}>
                                <span className={s.statNumber}>19</span>
                                <span className={s.statConcept}>skills</span>
                            </motion.div>
                            <motion.div className={s.stat}>
                                <span className={s.statNumber}>4</span>
                                <span className={s.statConcept}>proyectos</span>
                            </motion.div>
                            <motion.div className={s.stat}>
                                <span className={s.statNumber}>7</span>
                                <span className={s.statConcept}>cursos</span>
                            </motion.div>
                        </motion.section>

                    </motion.div>
                    
                    <motion.section className={s.social}>
                        <a href="https://www.linkedin.com/in/pablo-bustos-/">
                            <motion.img className={s.icon} src={linkedinLogo}/>
                        </a>

                        <a href="https://github.com/PabloAgustinBustos">
                            <motion.img className={s.icon} src={githubLogo}/>
                        </a>
                    </motion.section>
                </motion.section>

                <motion.section className={s.right}>
                    <motion.div className={s.me}>
                        <motion.h1 className={s.name}>Pablo Bustos</motion.h1>
                        <motion.span className={s.profesion}>Desarrollador full-stack</motion.span>
                    </motion.div>

                    <motion.div className={s.descriptionContainer}>
                        <motion.p className={s.description}>Soy programador muy apasionado por la tecnología.</motion.p>
                        <motion.p className={s.description}>Me considero autodidacta y versatil. Me gusta adquirir nuevas herramientas a medida que voy trabajando y ganando experiencia, ya sea solo o en conjunto con un equipo.</motion.p>
                        <motion.p className={s.description}>Mi objetivo es crecer personal y profesionalmente afrontando nuevos desafios en mi vida.</motion.p>
                    </motion.div>

                    {/* <motion.button className={s.button}>Ver trayectoria</motion.button> */}
                    <Button text="Ver trayectoria" form="bgDark"/>
                </motion.section>
            </motion.div>
        </motion.main>
    )
}

export default Home
