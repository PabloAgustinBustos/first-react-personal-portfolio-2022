import React from 'react'
import { useEffect } from 'react'
import {motion, useAnimationControls} from "framer-motion"
import s from "./styles.module.css"
import { backgroundVariants, modalVariants } from './animations'
import Timeline from '../Timeline'
import { journy } from '../../utils'
import { useState } from 'react'

const Modal = ({setShowModal}) => {
    const controls = useAnimationControls()
    const [selected, setSelected] = useState("pasado")

    let today = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear()    

    useEffect(() => {
        controls.start("visible")
    }, [])

    const handleClick = () => {
        controls.start("hidden")
        setTimeout(() => {
            setShowModal(false)
        }, 400)
    }
    
    return (<>
        <motion.div variants={backgroundVariants} initial="hidden" animate={controls} className={s.background} onClick={handleClick}></motion.div>

        <motion.div variants={modalVariants} initial="hidden" animate={controls} className={s.modal}>
            <h1 className={s.title}>Trayecto</h1>
            <Timeline selected={selected} setSelected={setSelected}/>

            <div className={s.textContainer}>
                {journy[selected].map(text => (<p key={text} className={s.text}>{text.replace("[-DATE-]", today)}</p>))}
            </div>
        </motion.div>
    </>)
}

export default Modal