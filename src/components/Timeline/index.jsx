import React, { useState } from 'react'
import {motion, useAnimationControls} from "framer-motion"
import s from "./styles.module.css"
import { lineVariants } from './animations'
import { useEffect } from 'react'

const Timeline = ({selected, setSelected}) => {
    const controls = useAnimationControls()

    // const [selected, setSelected] = useState("past")

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
                    initial="pasado"
                    animate={controls}
                ></motion.div>
            </div>

            <div className={s.block}>
                <span className={s.time}>pasado</span>
                <div id="pasado" className={`${s.circle} ${s.color}`} onClick={handleClick}></div>
            </div>
            <div className={s.block}>
                <span className={s.time}>presente</span>
                <div id="presente" className={`${s.circle} ${selected=="presente" || selected=="futuro" ? s.color : s.offColor}`} onClick={handleClick}></div>
            </div>
            <div className={s.block}>
                <span className={s.time}>futuro</span>
                <div id="futuro" className={`${s.circle} ${selected=="futuro" ? s.color : s.offColor}`} onClick={handleClick}></div>
            </div>
        </section>
    )
}

export default Timeline