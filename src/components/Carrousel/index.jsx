import React from 'react'
import { useState, useEffect } from 'react'
import s from "./styles.module.css"

const Carrousel = ({images}) => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if(current >= images.length){
            setCurrent(0)
        }else if(current < 0){
            setCurrent(images.length-1)
        }
    }, [current])

    return (
        <div className={s.container}>
            <div className={s.topContainer}>
                <img className={s.img} src={images[current]}/>
            </div>

            <div className={s.pagination}>
                <div className={s.circles}>
                    {images.map((i, id) => (
                        <div
                            key={i}
                            className={`${s.circle} ${id==current ? s.selected : null}`}
                            onClick={() => setCurrent(id)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carrousel