const backgroundVariants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: .5
        }
    },

    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const modalVariants = {
    hidden: {
        y: "10vh",
        opacity: 0,
        transition: {
            duration: .5
        }
    },

    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export{
    backgroundVariants,
    modalVariants
}