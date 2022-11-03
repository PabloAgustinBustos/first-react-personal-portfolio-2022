import React from 'react'
import { motion } from "framer-motion"
import s from "./styles.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import {colors, projects} from "../../utils"
import { useContext } from 'react'
import { MyContext } from '../../components/GlobalStates'
import { buttonVariants } from '../Home/animations'
import Button from '../../components/Button'
import TechUsed from '../../components/TechUsed'
import Carrousel from '../../components/Carrousel'
import { botVariants, topVariants } from './animations'
import { useEffect } from 'react'
const Proyecto = () => {
    const {id} = useParams()
    const {controls} = useContext(MyContext)

    const project = projects.find(p => p.id == id)

    const handleClick = () => window.open(project.link, '_blank');

    useEffect(() => {
        controls.start("visible")
    }, [])

    return (
        <main className={s.container}>    
            <section className={s.project}>
                <section className={s.top}>
                    <motion.section 
                        className={s.left}
                        variants={topVariants}
                        initial="hidden"
                        animate={controls}
                        custom="left"
                    >
                        <Carrousel images={project.images}/>
                    </motion.section>
                    
                    <motion.section 
                        className={s.right}
                        variants={topVariants}
                        initial="hidden"
                        animate={controls}
                        custom="right"
                    >
                        <article className={s.header}>
                            <div className={s.leftSection}>
                                <h1 className={`${s.name} ${ project.name.length > 11 ? s.small : s.normal}`}>{project.name}</h1>
                                <span className={s.version}>v{project.version}</span>
                            </div>
                            {project.link ? <Button text="Ir a la página" form="bgDark" onClick={handleClick}/> : null}
                        </article>

                        <TechUsed>
                            {project.techStack.fullList.map(({title, src}, id, array) => (
                                <img className={array.length > 8 ? s.smallIcon : s.normalIcon} key={title} title={title} src={src}/>
                            ))}
                        </TechUsed>
                    </motion.section>
                </section>
                
                <motion.section 
                    className={s.bot}
                    variants={botVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {project.description.map((des, i) => {

                        const {title, content} = des
                        
                        return(<article key={title} className={s.paragraph}>
                            <h1 className={`${s.description_title} ${s[colors[i]]}`}>{title}</h1>

                            {content.map(text => (<p className={s.text}>{text}</p>))}
                        </article>)
                    })}
                </motion.section>
            </section>
        </main>
    )
}

export default Proyecto