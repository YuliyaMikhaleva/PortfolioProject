import "./AppHeader.scss"
import AppHeaderNav from "./AppHeaderNav/AppHeaderNav";

const AppHeader = () => {

    return (
        <nav className="app-header">
            <AppHeaderNav className="app-header__nav" />
        </nav>

    )
}

export default AppHeader