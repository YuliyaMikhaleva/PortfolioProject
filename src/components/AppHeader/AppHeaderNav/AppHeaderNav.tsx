import "./AppHeaderNav.scss"
import {NavLink} from "react-router-dom";
import React from "react";

export interface IAppHeaderNavProps {
    className?: string;
}
const AppHeaderNav:React.FC<IAppHeaderNavProps> = ({className}) => {

    return (
        <ul className={['app-header-nav', className].join(' ')}>
            <li>
                <NavLink className="app-header-nav__link" to="/">Обо мне</NavLink>
            </li>
            <li>
                <NavLink className="app-header-nav__link" to="/contacts">Контакты</NavLink>
            </li>
            <li>
                <NavLink className="app-header-nav__link" to="/edu">Обучение</NavLink>
            </li>
            <li>
                <NavLink className="app-header-nav__link" to="/projects">Опыт работы</NavLink>
            </li>
            <li>
                <NavLink className="app-header-nav__link" to="/ui">Ui</NavLink>
            </li>
        </ul>

    )
}

export default AppHeaderNav