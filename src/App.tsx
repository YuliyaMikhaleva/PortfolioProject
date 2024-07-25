import 'assets/styles/style.scss'
import AppBody from "./components/AppBody/AppBody";
import AppHeader from "./components/AppHeader/AppHeader";
import ContainerTemplate from "./templates/ContainerTemplate";
import CustomCursor from "./components/_UiComponents/CustomCursor/CustomCursor";

function App() {

    return (
        <div className="app">
            <ContainerTemplate>
                <AppHeader />
                <AppBody />
                <CustomCursor />
            </ContainerTemplate>
        </div>
    )
}

export default App