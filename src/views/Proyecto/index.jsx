import React from 'react'
import s from "./styles.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import {projects} from "../../utils"
import { useContext } from 'react'
import { MyContext } from '../../components/GlobalStates'
import { buttonVariants } from '../Home/animations'
import Button from '../../components/Button'
import TechUsed from '../../components/TechUsed'
import Carrousel from '../../components/Carrousel'
const Proyecto = () => {
    const {id} = useParams()
    const {controls} = useContext(MyContext)

    const project = projects.find(p => p.id == id)

    const handleClick = () => window.open(project.link, '_blank');

    return (
        <main className={s.container}>    
            <section className={s.project}>
                <section className={s.top}>
                    <section className={s.left}>
                        <Carrousel images={project.images}/>
                    </section>
                    
                    <section className={s.right}>
                        right
                    </section>
                </section>
                
                <section className={s.bot}>
                    bot<br/>
                    bot<br/>
                    bot<br/>
                    bot<br/>
                    bot<br/>
                    bot<br/>
                    bot<br/>
                    bot<br/>
                    bot<br/>
                    bot<br/>
                </section>
            </section>
        </main>
    )
}

export default Proyecto