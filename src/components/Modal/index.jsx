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

    useEffect(() => {
        console.log(journy[selected])
    }, [selected])
    
    return (<>
        <motion.div variants={backgroundVariants} initial="hidden" animate={controls} className={s.background} onClick={handleClick}></motion.div>

        <motion.div variants={modalVariants} initial="hidden" animate={controls} className={s.modal}>
            <h1 className={s.title}>Trayecto</h1>
            <Timeline selected={selected} setSelected={setSelected}/>

            <div className={s.textContainer}>
                {journy[selected].map(text => (<p className={s.text}>{text.replace("[-DATE-]", today)}</p>))}
                {/* <p className={s.text}>Al día de hoy {today} sigo aprendiendo un montón de cosas nuevas por mi propia cuenta, remasterizando conocimientos adquiridos, aprendiendo nuevas prácticas, realizando proyectos, trabajando en equipo y lo más importante, dándole forma a mis ideas, materializando lo que tengo en la cabeza.</p>
                <p className={s.text}>Estoy aprendiendo nuevas tecnologías como Next.js, sass y nuevas maneras de trabajar como el testing, los patrones de diseño, diferentes estratégias de branching, etc.</p>
                <p className={s.text}>lo más relevante en este momento presente es aplicar todos mis conocimientos en algo real y descubrir nuevas cosas a medida que voy trabajando.</p> */}
            </div>
        </motion.div>
    </>)
}

export default Modal