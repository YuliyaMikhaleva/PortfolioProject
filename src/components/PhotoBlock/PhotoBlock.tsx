import "./PhotoBlock.scss"
import BubbleButton from "../_UiComponents/BubbleButton/BubbleButton";
import AnimateCircles from "../AnimateComponents/AnimateCircles/AnimateCircles";
import LikeCheckbox from "components/_UiComponents/LikeCheckbox/LikeCheckbox.tsx";
import {useInput} from "hooks/useInput.tsx";

const PhotoBlock = () => {
    const {bind: codeLikeBind, value: codeLikeValue } = useInput('');
    const aboutMe = () => {
        const snapContainer = document.querySelector('.snap-container');
        if (snapContainer) {
            snapContainer.scrollTo({
                top: 1000,
                behavior: "smooth",
            })
        }
    }
    return (
        <div className="photo-block">
            <div>
                Привет!
                <div className="photo-block__text">
                    Если вы зашли сюда, значит хотите узнать про меня
                </div>
                <BubbleButton white className="photo-block__button" onClick={aboutMe}>Узнать подробнее</BubbleButton>
                <br/>
                <br/>
                <br/>
                <AnimateCircles className="photo-block__animate-circles" width={500} height={500} />
                <div className="photo-block__animate-circles-notes">наведи на меня</div>
            </div>
            <div className="photo-block__container">
                <div className="photo-block__photo">
                    <img src="https://sun9-76.userapi.com/impg/QnG4aSpnPkwdSBCkdZjPot5Tcp7bBkl0pQNLJg/CWxHsyLPPuE.jpg?size=607x1080&quality=95&sign=d7fef055ea6990a93bf9cac158e824f0&type=album" alt=""/>
                </div>
                <LikeCheckbox onChange={codeLikeBind.onChange} value={codeLikeValue} className="photo-block__like" />
                <div className="photo-block__notes">
                    Юлия, фронтенд-разработчик, город Пермь
                </div>
            </div>
        </div>

    )
}

export default PhotoBlock