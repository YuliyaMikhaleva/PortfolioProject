import "./TextArea.scss"
import {memo} from "react";
import * as React from "react";

export interface ITextAreaProps {
    className?: string;
    placeholder?: string;
    value: string;
    onChange: (e:any) => void;

}

const TextArea: React.FC<ITextAreaProps> = memo(({className, placeholder, value, onChange}) => {

    const classes = [
        'text-area',
        className,
        value.length && 'text-area--active'
    ].join(' ');


    return (
        <div className={classes}>
            <textarea value={value} onChange={onChange} onPaste={onChange}/>
            <span className="text-area__placeholder">{placeholder}</span>
        </div>
    )
});

export default TextArea