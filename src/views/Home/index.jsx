import { motion } from 'framer-motion'
import React from 'react'
import s from "./styles.module.css"
import profilePhoto from "../../assets/img/pp.jpg"
import linkedinLogo from "../../assets/icons/linkedin.png"
import githubLogo from "../../assets/icons/github.png"
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import {stats} from "../../utils"
import Skills from '../Skills'

const Home = () => {
    return (
        <main className={s.containerFlex}>
            <div className={s.container}>
                <motion.section 
                    className={s.left}
                    
                    // initial={{
                    //     x: "-100vh"
                    // }}
                    
                    // animate={{
                    //     x: "0px"
                    // }}

                    
                >
                    <motion.img 
                        className={s.image} 
                        src={profilePhoto}
                        initial={{
                            y: "-80vh"
                        }}
                    
                        animate={{
                            y: 0
                        }}

                        transition={{
                            duration: 1.2,
                            type:"spring"
                        }}
                    />

                    <motion.div 
                        className={s.marco}
                        
                        initial={{
                            x: "-80vw"
                        }}
                    
                        animate={{
                            x: 0
                        }}

                        transition={{
                            duration: 1.2,
                            delay: 0.8,
                            type:"spring"
                        }}
                    >
                        <motion.section 
                            className={s.stats}

                            initial={{
                                
                            }}
                        
                            animate={{
                                width: ["100%", "60%", "100%"]
                            }}
    
                            transition={{
                                duration: 1.2,
                                delay: .8,
                                type:"spring"
                            }}
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

                    </motion.div>
                    
                    <section className={s.social}>
                        <motion.a 
                            href="https://www.linkedin.com/in/pablo-bustos-/"
                            
                            initial={{
                                y: "50vh"
                            }}
                        
                            animate={{
                                y: 0
                            }}

                            transition={{
                                duration: 1.2,
                                delay: 0.8,
                                type:"spring"
                            }}
                        >
                                
                            <img className={s.icon} src={linkedinLogo}/>
                        </motion.a>

                        <motion.a 
                            href="https://github.com/PabloAgustinBustos"
                            
                            initial={{
                                y: "50vh"
                            }}
                        
                            animate={{
                                y: 0
                            }}

                            transition={{
                                duration: 1.2,
                                delay: 1.2,
                                type:"spring"
                            }}
                        >
                            <img className={s.icon} src={githubLogo}/>
                        </motion.a>
                    </section>
                </motion.section>

                <section className={s.right}>
                    <div className={s.me}>
                        <motion.h1 
                            className={s.name}

                            initial={{
                                y: "-50vh"
                            }}
                        
                            animate={{
                                y: 0
                            }}

                            transition={{
                                duration: 1.2,
                                delay: .2,
                                type:"spring"
                            }}
                        >Pablo Bustos</motion.h1>

                        <motion.div
                            className={s.profesion}

                            initial={{
                                x: "55vw"
                            }}
                        
                            animate={{
                                x:0
                            }}

                            transition={{
                                duration: 1.2,
                                delay: .5,
                                type:"spring"
                            }}
                        >Desarrollador full-stack</motion.div>
                    </div>

                    <motion.div 
                        className={s.descriptionContainer}
                        
                        initial={{
                            y: "55vh"
                        }}
                    
                        animate={{
                            y:0
                        }}

                        transition={{
                            duration: 1.2,
                            delay: .5,
                            type:"spring"
                        }}
                    >
                        <p className={s.description}>Soy programador muy apasionado por la tecnología.</p>
                        <p className={s.description}>Me considero autodidacta y versatil. Me gusta adquirir nuevas herramientas a medida que voy trabajando y ganando experiencia, ya sea solo o en conjunto con un equipo.</p>
                        <p className={s.description}>Mi objetivo es crecer personal y profesionalmente afrontando nuevos desafios en mi vida.</p>
                    </motion.div>

                    {/* <button className={s.button}>Ver trayectoria</button> */}
                    <Button text="Ver trayectoria" form="bgDark"/>
                </section>
            </div>
        </main>
    )
}

export default Home
