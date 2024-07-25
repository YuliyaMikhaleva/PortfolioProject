import "./CustomCursor.scss"
import {useEffect, useRef} from "react";

const CustomCursor = () => {
    const cursor = useRef<HTMLDivElement>(null);
    const moveCursor = (e) => {
        if (cursor && cursor.current) {
            cursor.current.style.left = (e.clientX - 20) + 'px'
            cursor.current.style.top = (e.clientY - 20 + window.scrollY) + 'px';
        }
    };
    window.addEventListener('mousemove', moveCursor)

    return (
        <div className="custom-cursor" ref={cursor}></div>
    )
}

export default CustomCursor