import React from 'react'
import {motion} from "framer-motion"
import s from "./styles.module.css"

const Button = ({text, form, onClick}) => <motion.button className={`${s.button} ${s[form]}`} onClick={onClick}>{text}</motion.button>

export default Button