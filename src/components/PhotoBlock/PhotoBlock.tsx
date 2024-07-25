import "./PhotoBlock.scss"


const PhotoBlock = () => {

    return (
        <div className="photo-block">
            <div>
                Привет!
                <div className="photo-block__text">
                    Если вы зашли сюда, значит хотите узнать про меня
                </div>
            </div>
            <div className="photo-block__container">
                <div className="photo-block__photo">
                    <img src="https://sun9-76.userapi.com/impg/QnG4aSpnPkwdSBCkdZjPot5Tcp7bBkl0pQNLJg/CWxHsyLPPuE.jpg?size=607x1080&quality=95&sign=d7fef055ea6990a93bf9cac158e824f0&type=album" alt=""/>
                </div>
            </div>
        </div>

    )
}

export default PhotoBlock