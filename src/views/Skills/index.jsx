import React from 'react'
import { motion } from 'framer-motion'
import s from "./styles.module.css"
import Button from '../../components/Button'
import Posit from '../../components/Posit'
import SliderSkills from '../../components/SliderSkills'
import { softSkills } from '../../utils'
import {stats} from "../../utils"
import { useEffect, useContext } from 'react'
import { MyContext } from '../../components/GlobalStates'
import { backgroundVariants, sectionVariants } from './animations'

const Skills = () => {
    const {controls} = useContext(MyContext)
    
    useEffect(() => {
        controls.start("visible")
    }, [])
    
    return (
        <motion.main variants={backgroundVariants} custom={"toLight"} animate={controls} className={s.container}>
            <motion.section variants={sectionVariants} initial="hidden" animate={controls} custom="top" className={s.frontSection}>
                <h1 className={s.text}>Me gusta trabajar con un total de <span className={s.fast}>{stats.techSkills} TECH SKILLS</span> <span className={s.hide}>{stats.techSkills} TECH SKILLS</span> y cada vez va incrementando</h1>

                <div className={s.positContainer}>
                    <Posit tech="front"/>
                    <Posit tech="back"/>
                    <Posit tech="agile"/>
                </div>
            </motion.section>
            
            <motion.section variants={sectionVariants} initial="hidden" animate={controls} custom="bot" className={s.softSection}>
                <h1 className={s.text}>Además de contar con <span className={s.fast}>{stats.softSkills} SOFT SKILLS</span> <span className={s.hide}>{stats.softSkills}  SOFT SKILLS</span></h1>

                <div className={s.info}>                   
                    <SliderSkills skills={softSkills}/>
                </div>
            </motion.section>
        </motion.main>
    )
}

export default Skills
