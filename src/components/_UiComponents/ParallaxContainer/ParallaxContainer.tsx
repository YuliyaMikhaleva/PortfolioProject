import "./ParallaxContainer.scss"
import * as React from "react";

export interface IParallaxContainerProps {
    children: React.ReactNode;
}

const ParallaxContainer:React.FC<IParallaxContainerProps> = ({children}) => {

    return (
        <div className="parallax-container">
            {children}
        </div>
    )
}

export default ParallaxContainer