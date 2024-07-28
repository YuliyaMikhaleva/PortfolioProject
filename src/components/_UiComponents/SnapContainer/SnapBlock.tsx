import "./SnapContainer.scss"
import * as React from "react";

export interface ISnapBlockProps {
    children?: React.ReactNode;
    className?: string;
    allHeight?: boolean;
}

const SnapBlock: React.FC<ISnapBlockProps> = ({children, className, allHeight=false}) => {

    return (
        <section className={[className, "snap-container__block", allHeight && "snap-container__block--all-height"].join(' ')}>
            {children}
        </section>

    )
}

export default SnapBlock