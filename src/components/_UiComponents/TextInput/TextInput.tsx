import "./TextInput.scss"
import {memo, useEffect, useState} from "react";
import * as React from "react";

export interface ITextInputProps {
    className?: string;
    placeholder?: string;
    value: string;
    onChange: (e:any) => void;
    name: 'email' | 'name';
}

const TextInput: React.FC<ITextInputProps> = memo(({className, placeholder, value='', onChange, name}) => {

    const [error, setError] = useState('');
    const isValidEmail = (email: string) =>  {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    const isValidName = (name: string) =>  {
        const nameRegex = /^[a-zA-Zа-яёА-ЯЁ ]*$/
        return nameRegex.test(name);
    }
    const classes = [
        'text-input',
        className,
        value.length && 'text-input--active',
        error && 'text-input--error',
    ].join(' ');

    useEffect(() => {
        if (value.length) {
            (name === 'email' && !isValidEmail(value)) ? setError('Пример: ivanov@mail.ru') : (
                (name === 'name' && !isValidName(value)) ? setError('В имени должны содержаться только буквы') : setError('')
            );
        } else {
            setError('')
        }

    }, [value, name]);

    return (
        <div className={classes}>
            <input type="text" value={value} onChange={onChange} onPaste={onChange}/>
            <span className="text-input__placeholder">{placeholder}</span>
            <span className="text-input__error">{error}</span>
        </div>
    )
});

export default TextInput