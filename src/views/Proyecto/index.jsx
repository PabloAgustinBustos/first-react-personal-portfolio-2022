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
                    <div className={s.left}>
                        <Carrousel images={project.images}/>
                    </div>

                    <div className={s.right}>
                        {/* <div className={s.infoContainer}>
                            <section className={s.titleContainer}>
                                <h1 className={s.title}>{project.name}</h1>

                                <Button onClick={handleClick} text="Ir a la app" form="bgDark"/>
                            </section>

                            <TechUsed>
                                {project.techStack.fullList.map(src => (
                                    <div className={s.iconContainer}>
                                        <img className={s.icon} key={src} src={src}/>
                                    </div>
                                ))}
                            </TechUsed>
                        </div> */}
                    </div>
                </section>

                <section className={s.bot}>
                    
                </section>
            </section>
        </main>
    )
}

export default Proyecto