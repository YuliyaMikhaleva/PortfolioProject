import "./NoteBlock.scss"
import * as React from "react";
// @ts-ignore
import Circle from "./circle.svg?react"
import {useEffect, useState} from "react";

export interface INoteBlockProps {
    children?: React.ReactNode;
    title?: string;
}
const NoteBlock: React.FC<INoteBlockProps> = ({children, title}) => {
    const [array, setArray] = useState<number[]>([]);

    useEffect(() => {
        let newArr = [];
        for (let i=0; i<11; i++){
            newArr.push(i)
        }
        setArray(newArr);
    }, []);

    return (
        <section className="note-block">
            <div className="note-block__circles">
                {array.map((_item, i) => (
                    <Circle className="note-block__svg" key={i} />
                ))}
            </div>
            <h2 className="note-block__title">{title}</h2>

            {children}
        </section>
    )
}

export default NoteBlock