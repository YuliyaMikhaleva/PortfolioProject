import "./AppFooter.scss"
import ContainerTemplate from "../../templates/ContainerTemplate";
import {SERVER_URL} from "../../App";

const AppFooter = () => {

    const submit = (e:any) => {
        e.preventDefault();
        // axios.post(
        //     `/api/express_backend/`,
        //     JSON.stringify({
        //
        //     })
        // ).then(res => console.log('res', res));
        let response = fetch(`${SERVER_URL}/api/express_backend/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                data:{
                    email: 'umihaleva93@mail.ru',
                    text: 'Какой-то новый текст'
                },
            })
        });
    }

    return (
        <nav className="app-footer">
            <ContainerTemplate>
                {/*<div>Мои контакты:</div>*/}
                <ul>
                    {/*<li>*/}
                    {/*    <a href="https://t.me/yulyamikh" target="_blank">Мой телеграм</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <a href="mailto:umihaleva93@mail.ru">Напишите мне</a>*/}
                    {/*</li>*/}
                    <form onSubmit={submit}>
                        <label htmlFor="name">Ваше имя111</label>
                        <input id="name" type="text"/>
                        <label htmlFor="mail">Ваша почта</label>
                        <input id="mail" type="text"/>
                        <button type="submit">Отправить</button>
                    </form>
                </ul>
            </ContainerTemplate>
        </nav>
    )
}

export default AppFooter
