import React from 'react'
import {motion} from "framer-motion"
import s from "./styles.module.css"
import {techIcons, positOf} from "../../utils"

const Posit = ({tech}) => {
    return (
        <div className={s.positContainer}>
            <img className={s.posit} src={positOf[tech]}/>

            <div className={s.positInfo}>
                <section className={s.skillTitle}>
                    <h2>{tech}</h2>
                </section>
                
                <section className={s.techIcons}>
                    {techIcons[tech].map(({title, src}) => <img title={title} className={s.icon} key={src} src={src}/>)}
                </section>
            </div>
        </div>
    )
}

export default Posit