import React from 'react'
import {motion} from "framer-motion"
import s from "./styles.module.css"
import { useEffect } from 'react'

const Button = ({id, controls, variants, text, form, onClick}) => {
    let animationProps={}
    
    
    if(variants){
        animationProps = {
            variants,
            initial:"hidden",
            animate: controls,
            transition: variants.transition
        }
    }
    
    useEffect(() => {
        if(controls) controls.start("visible")
    }, [])

    return <>
        <motion.div {...animationProps}>
            <button id={id} className={`${s.button} ${s[form]}`} onClick={onClick}>
                {form === "selected" ? <div className={s.loader}></div> : null}
            
                {text}
            </button>
        </motion.div>
    </>
}

export default Button