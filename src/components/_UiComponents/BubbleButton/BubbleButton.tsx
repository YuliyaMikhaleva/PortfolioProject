import "./BubbleButton.scss"
import {memo, useRef} from "react";
import * as React from "react";

export interface IBubbleButtonProps {
    children?: React.ReactNode;
    className?: string;
    white?:boolean;
    onClick?:() => void;

}

const BubbleButton: React.FC<IBubbleButtonProps> = memo(({children, className, white, onClick}) => {
    const spanEl = useRef<any>()
    const buttonEl = useRef<any>()
    const handler = (e:any) => {
        if (buttonEl && buttonEl.current && spanEl && spanEl.current) {
            document.documentElement.style.setProperty('--button-width', `${buttonEl.current.getBoundingClientRect().width}px`);
            var parentOffset = buttonEl.current.getBoundingClientRect();
            var relX = e.clientX - parentOffset.left;
            var relY = e.clientY - parentOffset.top;
            spanEl.current.style.top = relY + 'px';
            spanEl.current.style.left = relX + 'px';
        }
    }

    const classes = [
        'bubble-button',
        className,
        white && 'bubble-button--white'
    ].join(' ');


    return (
        <button className={classes} ref={buttonEl} onMouseEnter={handler} onClick={onClick}>
            {children}
            <span ref={spanEl}></span>
        </button>
    )
});

export default BubbleButton