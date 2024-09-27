import "./AppHeader.scss"
import AppHeaderNav from "./AppHeaderNav/AppHeaderNav";
import ContainerTemplate from "../../templates/ContainerTemplate";
import {useSwitch} from "hooks/useSwitch.tsx";
import Switch from "components/_UiComponents/Switch/Switch.tsx";
import {useEffect} from "react";

const AppHeader = () => {
    const { toggle: toggleLight, value: isDark } = useSwitch(true);

    useEffect(() => {
        let htmlElement = document.documentElement;
        if (isDark) {
            htmlElement.setAttribute('theme', 'dark')
        } else {
            htmlElement.setAttribute('theme', 'light')
        }
    }, [isDark]);

    return (
        <nav className="app-header">
            <ContainerTemplate>
                {/*<AppHeaderNav className="app-header__nav" />*/}
                <Switch active={isDark} onClick={() => toggleLight()} className="ui-page__switch"></Switch>
            </ContainerTemplate>
        </nav>

    )
}

export default AppHeader