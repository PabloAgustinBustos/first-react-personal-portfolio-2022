import React from 'react'

import s from "./styles.module.css"

const TechUsed = ({children}) => {
    return (
        <article className={s.skills}>
            <div className={s.tagContainer}>
                <span className={s.tag}>Tecnologías usadas</span>
            </div>

            <div className={s.icons}>
                {children}
            </div>
        </article>
    )
}

export default TechUsed