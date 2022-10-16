

import React from 'react'
import { useAnimationControls } from "framer-motion";
import { createContext } from "react";

export const MyContext = createContext()

const GlobalStates = ({children}) => {
    const controls = useAnimationControls()
    
    return (
        <MyContext.Provider value={{controls}}>{children}</MyContext.Provider>
    )
}

export default GlobalStates