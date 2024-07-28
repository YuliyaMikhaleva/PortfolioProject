import "./SnapContainer.scss"
import * as React from "react";
import {FC} from "react";

export interface ISnapContainerProps {
    children?: React.ReactNode;
    className?: string;
}

const SnapContainer:FC<ISnapContainerProps> = ({children, className}) => {


    return (
        <section className={["snap-container", className ].join('')}>
            {children}
        </section>

    )
}

export default SnapContainer