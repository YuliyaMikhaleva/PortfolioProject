import "../LikeCheckbox/LikeCheckbox.scss"
import React, {memo} from "react";
// @ts-ignore
import LikeIcon from "icons/_UiComponents/LikeIcon.svg?react"

export interface ILikeCheckboxProps {
    className?: string,
    onChange: (e: any) => void,
    value:any
}

const LikeCheckbox: React.FC<ILikeCheckboxProps> = memo(({className, onChange, value}) => {

    const classes = [
        'like-checkbox',
        className

    ].join(' ');


    return (
        <label className={classes}>
            <input type="checkbox" onChange={(e) => onChange(String(e.target.checked))} value={value}/>
            <LikeIcon className="like-checkbox__icon" />
        </label>
    )
});

export default LikeCheckbox