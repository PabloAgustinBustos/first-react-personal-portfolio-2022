import React, { useState } from 'react'
import { useEffect } from 'react'
import Button from '../Button'
import s from "./styles.module.css"

const SliderSkills = ({skills}) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => prev + 1)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if(index > 5){
            setIndex(0)
        }
    }, [index])

    const handleClick = e => {
        const {id} = e.target

        setIndex(parseInt(id))
    }

    return (<>
        <section className={s.buttons}>
            {skills.map(({skill}, id) => (<Button key={skill}
                id={id}
                text={skill}
                form={id===index ? "selected" : "bgLight"}
                onClick={handleClick}
            />))}
        </section>

        <div className={s.descriptionContainer}>
            {skills[index]?.description.map(text => <p key={text} className={s.p}>{text}</p>)}
        </div>
    </>)
}

export default SliderSkills