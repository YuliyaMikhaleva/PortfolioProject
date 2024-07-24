import 'assets/styles/style.scss'
import AppBody from "./components/AppBody/AppBody";
import AppHeader from "./components/AppHeader/AppHeader";
import ContainerTemplate from "./templates/ContainerTemplate";

function App() {

    return (
        <div className="app">
            <ContainerTemplate>
                <AppHeader />
                <AppBody />
            </ContainerTemplate>
        </div>
    )
}

export default App