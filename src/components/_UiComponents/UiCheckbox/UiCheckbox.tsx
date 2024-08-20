import "./UiCheckbox.scss"
import React, {memo} from "react";

export interface IUiCheckboxProps {
    className?: string,
    name: string,
    label: string,
    onChange: (e: any) => void,
    ref?: React.MutableRefObject<undefined>
    value:any
}

const UiCheckbox: React.FC<IUiCheckboxProps> = memo(({className, name, label, onChange, value}) => {

    const classes = [
        'ui-checkbox',
        className

    ].join(' ');


    return (
        <div className={classes}>
            <input id={name + 'checkbox'} type="checkbox" name={name}
                   onChange={(e) => onChange(String(e.target.checked))} value={value}/>
            <label htmlFor={name + 'checkbox'} className="ui-checkbox__label">
                <span className="ui-checkbox__text">{label}</span>
            </label>
        </div>
    )
});

export default UiCheckbox