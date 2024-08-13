import "./AppFooter.scss"
import ContainerTemplate from "../../templates/ContainerTemplate";

const AppFooter = () => {

    return (
        <nav className="app-footer">
            <ContainerTemplate>
                <div>Мои контакты:</div>
                <ul>
                    <li>
                        <a href="https://t.me/yulyamikh" target="_blank">Мой телеграм</a>
                    </li>
                    <li>
                        <a href="mailto:umihaleva93@mail.ru">Напишите мне</a>
                    </li>
                </ul>
            </ContainerTemplate>
        </nav>
    )
}

export default AppFooter