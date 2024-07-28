import "./AppHeaderNav.scss"
import {NavLink} from "react-router-dom";

const AppHeaderNav = ({className}) => {

    return (
        <ul className={['app-header-nav', className].join(' ')}>
            <li>
                <NavLink to="/">Главная</NavLink>
            </li>
            <li>
                <NavLink to="/contacts">Контакты</NavLink>
            </li>
            <li>
                <NavLink to="/edu">Обучение</NavLink>
            </li>
            <li>
                <NavLink to="/projects">Опыт работы</NavLink>
            </li>
            <li>
                <NavLink to="/ui">Ui</NavLink>
            </li>
        </ul>

    )
}

export default AppHeaderNav