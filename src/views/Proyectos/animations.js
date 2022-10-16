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

const titleVariants = {
    hidden: {
        x: "-50vh"
    },

    visible: {
        x: 0
    },
    change:{
        // scale: 0,
        x: "180vh"
    }
}

const projectVariants = {
    normal: {
        scale: 1,
    },

    visible: (custom) => {
        return{
            opacity: 1,
            scale: 1,
            transition:{
                delay: .1 * custom
            }
        }
    },

    change: (custom) => {
        return{
            scale: 0,
            transition:{
                delay: .01 * custom
            }
        }
    }
}

export{
    backgroundVariants,
    titleVariants,
    projectVariants
}