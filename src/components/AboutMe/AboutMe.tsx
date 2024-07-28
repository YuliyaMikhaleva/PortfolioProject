import "./AboutMe.scss"
import * as React from "react";
import NoteBlock from "../NoteBlock/NoteBlock";

export interface IAboutMeProps {
    className?: string;
}

const AboutMe: React.FC<IAboutMeProps> = ({className}) => {

    return (
        <section className={[className, "about-me"].join(' ')}>
            <NoteBlock title="Обо мне">
                Приветствую еще раз на моем сайте-портфолио! Здесь я постараюсь рассказать о себе и проектах, в которых мне
                довелось участвовать, и какие работы выполнять, ряд примеров из которых я постараюсь показать.
            </NoteBlock>
        </section>
    )
}

export default AboutMe