import 'assets/styles/style.scss'
import AppBody from "./components/AppBody/AppBody";
import AppHeader from "./components/AppHeader/AppHeader";
import Button from "components/_UiComponents/Button/Button.tsx";
import CustomCursor from "components/_UiComponents/CustomCursor/CustomCursor.tsx";
import SnapContainer from "components/_UiComponents/SnapContainer/SnapContainer.tsx";
import SnapBlock from "components/_UiComponents/SnapContainer/SnapBlock.tsx";
import AppFooter from "components/AppFooter/AppFooter.tsx";
import {useEffect, useState} from "react";

function App() {

    const callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        console.log('rsp', response);
        return response
        // const body = await response.json();
        //
        // if (response.status !== 200) {
        //     throw Error(body.message)
        // }
        // return body;
    };

    useEffect(() => {
        callBackendAPI().then(res => {
            console.log('res', res)
        })
    }, []);
    //
    const upHandler = () => {
        const snapContainer = document.querySelector('.snap-container');
        if (snapContainer) {
            snapContainer.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }
    }


    // const [state, setState] = useState(null);

    const handler = async () => {
        const response = await fetch('http://localhost:3000/express_backend');
        // const body = await response.json();
        //
        // if (response.status !== 200) {
        //     throw Error(body.message)
        // }
        return response;
    };

    // получение GET маршрута с сервера Express, который соответствует GET из server.js
    useEffect(() => {
        handler()
            .then(res => console.log('res', res))
            // .catch(err => console.log(err));
    }, [])

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