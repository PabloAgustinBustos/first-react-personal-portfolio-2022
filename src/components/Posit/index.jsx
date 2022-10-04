import React from 'react'
import {motion} from "framer-motion"
import s from "./styles.module.css"
import {techIcons, positOf} from "../../utils"

const Posit = ({tech}) => {
    return (
        <motion.div className={s.positContainer}>
            <img style={{position:"absolute"}} src={positOf[tech]}/>

            <div className={s.positInfo}>
                <section className={s.skillTitle}>
                    <h2>{tech}</h2>
                </section>
                
                <section className={s.techIcons}>
                    {techIcons[tech].map(src => <img className={s.icon} key={src} src={src}/>)}
                </section>
            </div>
        </motion.div>
    )
}

export default Posit