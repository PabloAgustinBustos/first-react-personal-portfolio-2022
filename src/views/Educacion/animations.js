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
        console.log("aaaaaaaaaaaaaaaaa")
        return{
            backgroundColor: "#000917",
            transition: {
                duration: .6,
                type:"spring"
            }
        }
    }
}

const circleVariants = {
    hidden:{
        opacity: 0
    },

    visible:{
        opacity: 1,
        transition: {
            duration: .6
        }
    },
}

const allCircleVariant = {
    change: {
        x: "-50vh",
        rotate: "-80deg",
        opacity: 0
        // transition: {
        //     type:"tweed"
        // }
    }
}

const liVariants = {
    hidden: {
        x: "150vh"
    },
    
    visible: (custom) => {
        return {
            x:0,
            transition: {
                duration: .3,
                type: "spring",
                delay: .2 * custom.id
            }
        }
    },

    change: (custom) => {
        
        return {
            y: "100vh",
            transition: {
                duration: .3,
                type: "spring",
            }
        }
    },
}

const titleVariants = {
    hidden: {
        scale: 0
    },
    
    visible: {
        scale: 1
    },

    change: {
        scale: 0
    }
}

export{
    backgroundVariants,
    circleVariants,
    liVariants,
    titleVariants,
    allCircleVariant
}