import React, { useState } from 'react'
import {motion, useAnimationControls} from "framer-motion"
import s from "./styles.module.css"
import { lineVariants } from './animations'
import { useEffect } from 'react'

const Timeline = () => {
    const controls = useAnimationControls()

    const [selected, setSelected] = useState("past")

    const handleClick = e => {
        const {id} = e.target
        
        setSelected(id)
        controls.start(id)
    }

    return (
        <section className={s.timeline}>
            <div className={s.lineContainer}>
                <motion.div 
                    className={s.line}
                    variants={lineVariants}
                    initial="past"
                    animate={controls}
                ></motion.div>
            </div>

            <div className={s.block}>
                <span className={s.time}>pasado</span>
                <div id="past" className={`${s.circle} ${s.color}`} onClick={handleClick}></div>
            </div>
            <div className={s.block}>
                <span className={s.time}>pasado</span>
                <div id="present" className={`${s.circle} ${selected=="present" || selected=="future" ? s.color : s.offColor}`} onClick={handleClick}></div>
            </div>
            <div className={s.block}>
                <span className={s.time}>pasado</span>
                <div id="future" className={`${s.circle} ${selected=="future" ? s.color : s.offColor}`} onClick={handleClick}></div>
            </div>
        </section>
    )
}

export default Timeline