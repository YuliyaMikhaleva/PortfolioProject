import "./AppHeader.scss"
import AppHeaderNav from "./AppHeaderNav/AppHeaderNav";
import ContainerTemplate from "../../templates/ContainerTemplate";

const AppHeader = () => {

    return (
        <nav className="app-header">
            <ContainerTemplate>
                <AppHeaderNav className="app-header__nav" />
            </ContainerTemplate>
        </nav>

    )
}

export default AppHeader