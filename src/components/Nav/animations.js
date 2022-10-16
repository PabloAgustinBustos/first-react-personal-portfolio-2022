const navVariants = {
    navToLight: {
        backgroundColor: "#4B89DC",
        color: "#000917",
        transition: {
            duration: .6,
            type:"spring"
        }
    },
    
    hidden: {
        y: "-20vh"
    },

    visible: (custom) => {
        return{
            y: "0",
            transition: {
                delay: custom
            }
        }
    },

    colorToDark: () => {
        console.log("colorToLight")
        return {
            color: "#000917",
            transition: {
                duration: .6,
                type:"spring"
            }
        }
    },

    colorToLight: {
        color: "#4B89DC",
        fontSize: "20px",
        transition: {
            duration: .6,
            type:"spring"
        }
    },

    navToDark: {
        backgroundColor: "#000917",
        color: "#4B89DC",
        transition: {
            duration: .6,
            type:"spring"
        }
    },
}

export{
    navVariants
}