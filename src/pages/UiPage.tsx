import Button from "components/_UiComponents/Button/Button";
import "./uiPage.scss"
import BubbleButton from "components/_UiComponents/BubbleButton/BubbleButton.tsx";
import TextInput from "components/_UiComponents/TextInput/TextInput.tsx";
import {useInput} from "hooks/useInput.tsx";
import {useEffect, useRef, useState} from "react";
import UiCheckbox from "components/_UiComponents/UiCheckbox/UiCheckbox.tsx";
import UiRadio from "components/_UiComponents/UiRadio/UiRadio.tsx";
import UiLink from "components/_UiComponents/UiLink/UiLink.tsx";
import {useSwitch} from "hooks/useSwitch.tsx";
import Switch from "components/_UiComponents/Switch/Switch.tsx";

const UiPage = () => {
    const {bind: codeNameBind, value: codeNameValue, setValue: setCodeNameValue } = useInput('');
    const {bind: codeSoNameBind, value: codeSoNameValue, setValue: setCodeSoNameValue } = useInput('');
    const {bind: checkboxBind, value: checkboxValue, setValue: setCheckboxValue } = useInput('false');
    const [radioAnswer, setRadioAnswer] = useState('')
    const { toggle: toggleOn, value: isOn } = useSwitch(false);

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

    useEffect(() => {
        console.log('radioAnswer', radioAnswer)
    }, [radioAnswer]);

    useEffect(() => {
        console.log('isOn', isOn)
    }, [isOn]);
    return (
        <div className="ui-page">
            <BubbleButton className="ui-page__bubble-button">Bubble</BubbleButton>
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
            <br/>
            <br/>
            <div className="ui-page__radio-list">
                <UiRadio name="name" id="1" value="value" label="label" onChange={() => setRadioAnswer('value')} />
                <UiRadio name="name" id="2" value="value2" label="label2" onChange={() => setRadioAnswer('value2')} />
                <UiRadio name="name" id="3" value="value3" label="label3" onChange={() => setRadioAnswer('value3')} />
            </div>
            <br/>
            <br/>
            <UiLink>Ссылка</UiLink>
            <br/>
            <br/>
            <Switch active={isOn} onClick={() => toggleOn()} className="ui-page__switch">
                Генерация сертификата
            </Switch>
        </div>
    )
}

export default UiPage