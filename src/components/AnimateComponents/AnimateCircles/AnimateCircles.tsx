import "./AnimateCircles.scss"

const AnimateCircles = ({className, width=500, height=500}) => {
    const classes = ["animate-circles", className].join(' ')
    return (
        <div className={classes} style={{width: width+'px', height: height+'px'}}>
            <i></i>
            <i></i>
            <i></i>
        </div>

    )
}

export default AnimateCircles