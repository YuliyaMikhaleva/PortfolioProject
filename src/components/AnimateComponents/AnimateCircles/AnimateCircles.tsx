import "./AnimateCircles.scss"
import React, {memo} from "react";

export interface IAnimateCirclesProps {
    className?: string,
    width?: number,
    height?: number,
    right?: boolean
}

const AnimateCircles:React.FC<IAnimateCirclesProps> = memo(({className, width=500, height=500, right}) => {
    const classes = ["animate-circles", className, right && 'animate-circles--right'].join(' ')
    return (
        <div className={classes} style={{width: width+'px', height: height+'px'}}>
            <i></i>
            <i></i>
            <i></i>
        </div>

    )
})

export default AnimateCircles