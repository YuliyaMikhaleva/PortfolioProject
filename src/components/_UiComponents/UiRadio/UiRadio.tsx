import "./UiRadio.scss"
import React, {memo} from "react";

export interface IUiRadioProps {
    className?: string,
    name: string,
    id: string | number,
    value: string | number,
    label: string | number,
    onChange: (e: any) => void,
}

const UiRadio: React.FC<IUiRadioProps> = memo(({className, name, id, value, label, onChange}) => {

    const classes = [
        'ui-radio',
        className

    ].join(' ');


    return (
        <div className={classes}>
            <input id={'question-' + id} type="radio" value={value} name={name} onChange={(e) => onChange(e.target.value)}/>
            <label htmlFor={'question-' + id} className="ui-radio__label">
                <span>{label}</span>
            </label>
        </div>
    )
});

export default UiRadio