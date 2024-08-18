import 'assets/styles/style.scss'
import AppBody from "./components/AppBody/AppBody";
import AppHeader from "./components/AppHeader/AppHeader";
import Button from "components/_UiComponents/Button/Button.tsx";
import CustomCursor from "components/_UiComponents/CustomCursor/CustomCursor.tsx";
import SnapContainer from "components/_UiComponents/SnapContainer/SnapContainer.tsx";
import SnapBlock from "components/_UiComponents/SnapContainer/SnapBlock.tsx";
import AppFooter from "components/AppFooter/AppFooter.tsx";

function App() {

    const upHandler = () => {
        const snapContainer = document.querySelector('.snap-container');
        if (snapContainer) {
            snapContainer.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }
    }


    return (
        <div className="app">
            <SnapContainer>
                <AppHeader />
                <AppBody />
                <CustomCursor />
                <Button circle className="app__up-button" onClick={upHandler}>Наверх</Button>
                <SnapBlock>
                    <AppFooter />
                </SnapBlock>
            </SnapContainer>
            {/* вывод данных, полученных с сервера Express */}
        </div>
    )
}

export default App