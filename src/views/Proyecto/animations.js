const topVariants={
    hidden: (custom) => {
        let x = "100vw"

        console.log(custom)
    
        if(custom === "left"){
            x = "-"+x
        }

        return {
            x
        }
    },
    visible: {
        x: 0
    },

    change: (custom) => {
        let x = "100vw"

        console.log(custom)
    
        if(custom === "left"){
            x = "-"+x
        }

        return {
            x
        }
    },
}

const botVariants = {
    hidden:{
        y: "100vh"
    },

    visible:{
        y: 0
    },

    change:{
        y: "150vh"
    }
}

export{
    topVariants,
    botVariants
}