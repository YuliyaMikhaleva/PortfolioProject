import "./Button.scss"
import {memo} from "react";
import * as React from "react";

export interface IButtonProps {
    children?: React.ReactNode;
    className?: string;
    circle?:boolean;
    onClick?:() => void;
    disabled?: boolean;

}

const Button: React.FC<IButtonProps> = memo(({
                                                 children,
                                                 className,
                                                 circle,
                                                 onClick,
                                                 disabled
}) => {

    const classes = [
        'button',
        circle && 'button--circle',
        disabled && 'button--disabled',
        className,
    ].join(' ');


    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
});

export default Button