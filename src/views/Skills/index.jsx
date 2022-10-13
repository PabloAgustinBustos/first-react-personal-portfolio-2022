import React from 'react'
import { motion } from 'framer-motion'
import s from "./styles.module.css"
import Button from '../../components/Button'
import Posit from '../../components/Posit'
import SliderSkills from '../../components/SliderSkills'
import { softSkills } from '../../utils'
import {stats} from "../../utils"

const Skills = () => {
    return (
        <motion.main className={s.container}>
            {/* <Button text="asdsad" form="bgLight"/> */}
            <motion.section className={s.frontSection}>
                <h1 className={s.text}>Me gusta trabajar con un total de <span className={s.fast}>{stats.techSkills} TECH SKILLS</span> <span className={s.hide}>{stats.techSkills} TECH SKILLS</span> y cada vez va incrementando</h1>

                <div className={s.positContainer}>
                    <Posit tech="front"/>
                    <Posit tech="back"/>
                    <Posit tech="agile"/>
                </div>
            </motion.section>
            
            <motion.section className={s.softSection}>
                <h1 className={s.text}>Además de contar con <span className={s.fast}>{stats.softSkills} SOFT SKILLS</span> <span className={s.hide}>{stats.softSkills}  SOFT SKILLS</span></h1>

                <div className={s.info}>                   
                    <SliderSkills skills={softSkills}/>
                </div>
            </motion.section>
        </motion.main>
    )
}

export default Skills
