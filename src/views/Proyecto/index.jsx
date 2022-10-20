import React from 'react'
import s from "./styles.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import {colors, projects} from "../../utils"
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
                        <article className={s.header}>
                            <h1 className={`${s.name} ${ project.name.length > 11 ? s.small : s.normal}`}>{project.name}</h1>
                            <Button text="Ir a la página" form="bgDark" onClick={handleClick}/>
                        </article>

                        <TechUsed>
                            {project.techStack.fullList.map((src, id, array) => (
                                <img className={array.length > 8 ? s.smallIcon : s.normalIcon} key={src} src={src}/>
                            ))}
                        </TechUsed>
                    </section>
                </section>
                
                <section className={s.bot}>
                    {project.description.map((des, i) => {

                        const {title, content} = des
                        
                        return(<article key={title} className={s.paragraph}>
                            <h1 className={`${s.description_title} ${s[colors[i]]}`}>{title}</h1>

                            {content.map(text => (<p className={s.text}>{text}</p>))}
                        </article>)
                    })}
                </section>
            </section>
        </main>
    )
}

export default Proyecto