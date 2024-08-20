import "./TextInput.scss"
import {memo} from "react";
import * as React from "react";

export interface ITextInputProps {
    className?: string;
    placeholder?: string;
    value: string;
    onChange: (e:any) => void;

}

const TextInput: React.FC<ITextInputProps> = memo(({className, placeholder, value='', onChange}) => {

    const classes = [
        'text-input',
        className,
        value.length && 'text-input--active'
    ].join(' ');


    return (
        <div className={classes}>
            <input type="text" value={value} onChange={onChange} onPaste={onChange} />
            <span className="text-input__placeholder">{placeholder}</span>
        </div>
    )
});

export default TextInput