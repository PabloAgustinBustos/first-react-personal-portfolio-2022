import React from 'react'
import {motion} from "framer-motion"
import s from "./styles.module.css"

const Button = ({id, text, form, onClick}) => (<>

    
    <motion.button id={id} className={`${s.button} ${s[form]}`} onClick={onClick}>
        {form === "selected" ? <div className={s.loader}></div> : null}
    
        {text}
    </motion.button>
</>)

export default Button