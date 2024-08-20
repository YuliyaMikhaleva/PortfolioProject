import Button from "components/_UiComponents/Button/Button";
import "./uiPage.scss"
import BubbleButton from "components/_UiComponents/BubbleButton/BubbleButton.tsx";
import TextInput from "components/_UiComponents/TextInput/TextInput.tsx";
import {useInput} from "hooks/useInput.tsx";
import {useEffect, useRef} from "react";
import UiCheckbox from "components/_UiComponents/UiCheckbox/UiCheckbox.tsx";

const UiPage = () => {
    const {bind: codeNameBind, value: codeNameValue, setValue: setCodeNameValue } = useInput('');
    const {bind: codeSoNameBind, value: codeSoNameValue, setValue: setCodeSoNameValue } = useInput('');
    const {bind: checkboxBind, value: checkboxValue, setValue: setCheckboxValue } = useInput('false');
    const checkboxEl = useRef()
    useEffect(() => {
        return () => {
            setCodeNameValue('');
            setCodeSoNameValue('');
            setCheckboxValue('false')
        }
    }, []);

    useEffect(() => {
        console.log('checkboxValue', checkboxValue)
    }, [checkboxValue]);
    return (
        <div className="ui-page">
            <BubbleButton className="ui-page__bubble-button">Кнопка</BubbleButton>
            <br/>
            <Button circle className="ui-page__circle-button">Круглая кнопка</Button>
            <br/>
            <br/>
            <Button className="ui-page__button">Обычная кнопка</Button>
            <br/>
            <br/>
            <TextInput placeholder="Ваше имя" value={codeNameValue} onChange={codeNameBind.onChange}/>
            <br/>
            <br/>
            <TextInput placeholder="Ваша фамилия" value={codeSoNameValue} onChange={codeSoNameBind.onChange}/>
            <br/>
            <br/>
            <UiCheckbox
                ref={checkboxEl}
                name="conditions"
                label="Я согласен с условиями использования"
                className="auth-form__checkbox"
                onChange={checkboxBind.onChange}
                value={checkboxValue}
            />
        </div>
    )
}

export default UiPage