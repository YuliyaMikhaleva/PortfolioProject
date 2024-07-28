import PhotoBlock from "../components/PhotoBlock/PhotoBlock";
import SnapContainer from "../components/_UiComponents/SnapContainer/SnapContainer";
import SnapBlock from "../components/_UiComponents/SnapContainer/SnapBlock";
import ContainerTemplate from "../templates/ContainerTemplate";
import ParallaxContainer from "../components/_UiComponents/ParallaxContainer/ParallaxContainer";
import AboutMe from "../components/AboutMe/AboutMe";

const IndexPage = () => {

    return (
        <SnapContainer>
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
                <h1>Новый блок3</h1>
            </SnapBlock>
            <SnapBlock>
                <h1>Новый блок4</h1>
            </SnapBlock>
        </SnapContainer>
    )
}

export default IndexPage