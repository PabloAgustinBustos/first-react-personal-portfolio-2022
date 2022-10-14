import React from 'react'
import {motion} from "framer-motion"
import s from "./styles.module.css"

const Button = ({id, text, form, onClick}) => (<>
    <motion.div
        initial={{
            x: "55vw"
        }}
    
        animate={{
            x:0
        }}

        transition={{
            duration: 1,
            delay: .8,
            type:"spring"
        }}
    >
        <button id={id} className={`${s.button} ${s[form]}`} onClick={onClick}>
            {form === "selected" ? <div className={s.loader}></div> : null}
        
            {text}
        </button>
    </motion.div>
</>)

export default Button