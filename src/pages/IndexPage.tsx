import PhotoBlock from "../components/PhotoBlock/PhotoBlock";
import SnapBlock from "../components/_UiComponents/SnapContainer/SnapBlock";
import ContainerTemplate from "../templates/ContainerTemplate";
import ParallaxContainer from "../components/_UiComponents/ParallaxContainer/ParallaxContainer";
import AboutMe from "../components/AboutMe/AboutMe";
import NoteBlock from "components/NoteBlock/NoteBlock.tsx";
import BubbleButton from "components/_UiComponents/BubbleButton/BubbleButton.tsx";

const IndexPage = () => {

    return (
        <div>
            <SnapBlock>
                <ContainerTemplate>
                    <PhotoBlock />
                </ContainerTemplate>
            </SnapBlock>
            <SnapBlock className="new" allHeight>
                <ParallaxContainer>
                    <ContainerTemplate>
                        <AboutMe />
                    </ContainerTemplate>
                </ParallaxContainer>
            </SnapBlock>
            <SnapBlock>
                <NoteBlock title="Обо мне">
                    <div>В прошлом получила высшее гуманитарное образование, но впоследствии нашла себя во <b>frontend-разработке</b>. "Кто бы знал, что можно получать такое удовольствие от работы?"</div>
                </NoteBlock>
            </SnapBlock>
            <SnapBlock>
                <NoteBlock title="Обучение">
                    <div>
                        <div>В 2020 году обучилась по курсу повышения квалификации по профессии "Фронтенд-разработчик" и
                            получила диплом государственного образца.
                        </div>
                        <br/>
                        <div>На курсе изучались:</div>
                        <ul>
                            <li>- HTML5, CSS3</li>
                            <li>- JavaScript 1 уровень</li>
                            <li>- JavaScript 2 уровень</li>
                            <li>- React</li>
                        </ul>
                        <div>После окончания основного обучения 2 месяца под руководством куратора проходила стажировку, где получила самое ценное - опыт групповой работы людей, находящихся в разных точках страны</div>
                    </div>
                </NoteBlock>
            </SnapBlock>
            <SnapBlock>
                <NoteBlock title="Опыт работы">
                    <div>
                        <div>
                            В конце 2020 года устроилась на стажировку,а с января устроилась на работу в
                            интернет-агентство <b>"Амадо"</b>, где работаю и по сей день.
                            Получила колоссальный опыт начиная с верстки под посадку на сайты на платформе 1с-bitrix в
                            связке с нативным JS и заканчивая работами на фреймворках <b>Vue и React</b>.
                            <br/>
                            На своем опыте прошла путь решения множества проблем с браузером <b>Safari</b>.
                        </div>                                                                                                         
                        <BubbleButton white className="note-block__button">Подробнее</BubbleButton>
                    </div>

                </NoteBlock>
            </SnapBlock>
            <SnapBlock>
                <NoteBlock title="Опыт работы">
                    <div>
                        В настоящее время помимо основной работы курирую стажеров в компании, провожу код-ревью.
                    </div>
                </NoteBlock>
            </SnapBlock>
            <SnapBlock>
                <NoteBlock title="Обучение">
                    <div>
                        Стараюсь посещать уральские митапы по веб-разработке или хотя бы смотреть ютуб/телеграм по
                        профессиональной тематике.
                    </div>
                </NoteBlock>
            </SnapBlock>
        </div>
    )
}

export default IndexPage