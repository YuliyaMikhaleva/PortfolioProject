import "./AppHeader.scss"
import AppHeaderNav from "./AppHeaderNav/AppHeaderNav";
import ContainerTemplate from "../../templates/ContainerTemplate";
import {useSwitch} from "hooks/useSwitch.tsx";
import Switch from "components/_UiComponents/Switch/Switch.tsx";
import {useEffect} from "react";

const AppHeader = () => {
    const { toggle: toggleLight, value: isLight } = useSwitch(false);

    useEffect(() => {
        let htmlElement = document.documentElement;
        if (isLight) {
            htmlElement.setAttribute('theme', 'dark')
        } else {
            htmlElement.setAttribute('theme', 'light')
        }
    }, [isLight]);

    return (
        <nav className="app-header">
            <ContainerTemplate>
                <AppHeaderNav className="app-header__nav" />
                <Switch active={isLight} onClick={() => toggleLight()} className="ui-page__switch"></Switch>
            </ContainerTemplate>
        </nav>

    )
}

export default AppHeader