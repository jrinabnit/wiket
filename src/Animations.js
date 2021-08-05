const containerVariants = {
    hidden: {
        y: '30', 
        opacity: 0            
    }, 
    visible: {
        y: 0, 
        opacity: 1,
        transition: {
            type: 'tween', 
            duration: 2
        }},
    active: {
        y: [ 0, 3, -3, 3, -3],
        transition: {
                delay: 2,
                duration: 10,
                yoyo: 3
            }}
}

const showFirstVariants = {
    hidden: {
        y: 0,
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.1
        }
    }
}

const showSecondVariants = {
    hidden: {
        y: 0,
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 1.1
        }
    }
}


export { containerVariants, showFirstVariants, showSecondVariants} 