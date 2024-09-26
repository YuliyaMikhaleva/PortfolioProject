import "./AppFooter.scss"
import ContainerTemplate from "../../templates/ContainerTemplate";
import {SERVER_URL} from "../../App";
import {useRef, useState} from "react";
// @ts-ignore
import ReCAPTCHA from "react-google-recaptcha";
import TextInput from "components/_UiComponents/TextInput/TextInput.tsx";
import {useInput} from "hooks/useInput.tsx";
import TextArea from "components/_UiComponents/TextArea/TextArea.tsx";
import Button from "components/_UiComponents/Button/Button";
// @ts-ignore
import EmailImg from "assets/images/Email_30017.png";
import PopupRight from "components/_PopupComponents/PopupRight/PopupRight.tsx";
const AppFooter = () => {
    const recaptchaRef = useRef();
    const {bind: codeNameBind, value: codeNameValue, setValue: setCodeNameValue } = useInput('');
    const {bind: codeEmailBind, value: codeEmailValue, setValue: setCodeEmailValue } = useInput('');
    const {bind: codeTextBind, value: codeTextValue, setValue: setCodeTextValue } = useInput('');
    const [activePopup, setActivePopup] = useState(false);
    const clearData = () => {
        setCodeNameValue('');
        setCodeEmailValue('');
        setCodeTextValue('');
    }

    const submit = async (e:any) => {
        e.preventDefault();
        // @ts-ignore
        const token = await recaptchaRef.current.executeAsync();
        fetch(`${SERVER_URL}/api/express_backend/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                data:{
                    email: codeEmailValue,
                    text: `
                    Имя: ${codeNameValue},
                    Текст сообщения: ${codeTextValue},
                    ` ,
                    gtoken: token,
                },
            })
        }).then(() => {
            clearData();
            setActivePopup(true);
        });
    }


    function onChange(value:string) {
        console.log("Captcha value:", value);
    }

    console.log('codeNameValue.length', codeNameValue.length)
    return (
        <nav className="app-footer">
            <ContainerTemplate>
                <ul>
                    <form onSubmit={submit}>
                        <h3 className="app-footer__title">Я буду рада, если Вы свяжетесь со мной</h3>
                        <br/>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            size="invisible"
                            sitekey="6LeLCyoqAAAAAMN-V13DbH9LLjMoO-VIzoNrdRb4"
                            onChange={onChange}
                        />
                        <TextInput className="app-footer__input" placeholder="Ваше имя" name="name" value={codeNameValue} onChange={codeNameBind.onChange}/>
                        <TextInput className="app-footer__input" placeholder="Электронная почта" name="email" value={codeEmailValue} onChange={codeEmailBind.onChange}/>
                        <TextArea className="app-footer__input" placeholder="Текст сообщения" value={codeTextValue} onChange={codeTextBind.onChange} />
                        <Button className="app-footer__submit" disabled={!(codeNameValue.length && codeEmailValue.length && codeTextValue.length)}>Отправить</Button>
                    </form>

                </ul>
                <PopupRight showPopup={activePopup} closePopup={() => setActivePopup(false)}>
                   <div className="app-footer__answer">
                       <div>Спасибо! </div>Ваше сообщение отправлено
                       <div className="app-footer__image">
                           <img src={EmailImg} alt=""/>
                       </div>
                   </div>
                </PopupRight>
            </ContainerTemplate>
        </nav>
    )
}

export default AppFooter
