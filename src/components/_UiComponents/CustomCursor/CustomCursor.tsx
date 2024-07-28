import "./CustomCursor.scss"
import {useEffect, useRef} from "react";

const CustomCursor = () => {
    const cursor = useRef<HTMLDivElement>(null);
    const point = useRef<HTMLDivElement>(null);
    const moveCursor = (e) => {
        if (cursor && cursor.current) {
            cursor.current.style.left = (e.clientX - 15) + 'px'
            cursor.current.style.top = (e.clientY - 15) + 'px';
        }
        if (point && point.current) {
            point.current.style.left = (e.clientX - 5) + 'px'
            point.current.style.top = (e.clientY - 7) + 'px';
        }
    };
    const hoverCursor = () => {
        if (cursor && cursor.current) {
            cursor.current.style.transform = "scale(4)"
        }
    };
    const hoverOutCursor = () => {
        if (cursor && cursor.current) {
            cursor.current.style.removeProperty("transform");
        }
    };
    useEffect(() => {
        window.addEventListener('mousemove', moveCursor);
        const links = document.body.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseenter', hoverCursor);
            link.addEventListener('mouseleave', hoverOutCursor);
        })
    }, []);



    return (
        <div className="custom-cursor">
            <div className="custom-cursor__large" ref={cursor}></div>
            <div className="custom-cursor__small" ref={point}></div>
        </div>

    )
}

export default CustomCursor