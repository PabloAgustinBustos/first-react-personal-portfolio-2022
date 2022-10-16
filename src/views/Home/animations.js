const imageVariants = {
    hidden: {
        y: "-80vh",

        transition: {
            duration: .5,
            // delay: .6,
            type:"spring"
        }
    },

    visible: {
        y: 0,

        transition: {
            duration: 1.2,
            delay: .6,
            type:"spring"
        }
    },

}

const marcoVariants = {
    hidden: {
        x: "-200%",
        
        transition: {
            duration: .5,
            delay: .4,
            type:"spring"
        }
    },

    visible: {
        x: ["-120%","40%", "0%"],
        width: ["100%", "60%", "100%"],

        transition: {
            duration: 1.2,
            delay: .8,
            type:"spring"
        }
    },

    
}

const linkedinVariants = {
    hidden: {
        y: "50vh",

        transition: {
            duration: .5,
            delay: .4,
            type:"spring"
        }
    },

    visible: {
        y: 0,

        transition: {
            duration: 1.2,
            delay: 0.8,
            type:"spring"
        }
    }
}

const githubVariants = {
    hidden: {
        y: "50vh",

        transition: {
            duration: .5,
            delay: .4,
            type:"spring"
        }
    },

    visible: {
        y: 0,

        transition: {
            duration: 1.2,
            delay: 1.2,
            type:"spring"
        }
    }
}

const nameVariants = {
    hidden: {
        y: "-50vh",

        transition: {
            duration: .5,
            delay: .2,
            type:"spring"
        }
    },

    visible: {
        y: 0,

        transition: {
            duration: 1.2,
            delay: .2,
            type:"spring"
        }
    }
}

const profesionVariants = {
    hidden: {
        x: "55vw",

        transition: {
            duration: .5,
            delay: .3,
            type:"spring"
        }
    },

    visible: {
        x: 0,

        transition: {
            duration: 1.2,
            delay: .5,
            type:"spring"
        }
    }
}

const descriptionVariants = {
    hidden: {
        y: "55vh",

        transition: {
            duration: .5,
            delay: .2,
            type:"spring"
        }
    },

    visible: {
        y:0,

        transition: {
            duration: 1.2,
            delay: .5,
            type:"spring"
        }
    }
}

const buttonVariants = {
    hidden: {
        x: "55vw",

        transition: {
            duration: .5,
            delay: .8,
            type:"spring"
        }
    },

    visible: {
        x:0,

        transition: {
            duration: 1,
            delay: .8,
            type:"spring"
        }
    }
}

const sectionVariants = {
    change: (custom) => {
        let x = "200%"
        
        if(custom === "left"){
            x = "-"+x
        }

        return{
            x,

            transition: {
                duration: .6,
                type:"spring"
            }   
        }
    }
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

export {
    imageVariants,
    marcoVariants,
    linkedinVariants,
    githubVariants,
    nameVariants,
    profesionVariants,
    descriptionVariants,
    buttonVariants,
    sectionVariants,
    backgroundVariants,
}