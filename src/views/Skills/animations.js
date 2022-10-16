const sectionVariants = {
    hidden: (custom) => {
        let initialY = custom === "top" ? "-100vh" : "100vh"

        return {
            y: initialY
        }
    },

    visible: (custom) => {
        return {
            y: 0
        }
    },

    change: (custom) => {
        let finalY = custom === "top" ? "-100vh" : "100vh"

        return {
            y: finalY
        }
    },
}

const backgroundVariants = {
    bgToLight: (custom) => {
        return{
            backgroundColor: "#4B89DC",
            transition: {
                duration: .6,
                type:"spring"
            }
        }        
    },
        
    bgToDark: (custom) => {    
        return{
            backgroundColor: "#000917",
            transition: {
                duration: .6,
                type:"spring"
            }
        }
    }
}

export{
    sectionVariants,
    backgroundVariants
}