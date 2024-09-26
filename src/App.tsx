import 'assets/styles/style.scss'
import {Route, Routes} from "react-router-dom";
import IndexPage from "pages/IndexPage.tsx";
import ContactsPage from "pages/ContactsPage.tsx";
import EduPage from "pages/EduPage.tsx";
import ProjectsPage from "pages/ProjectsPage.tsx";
import UiPage from "pages/UiPage.tsx";
import ErrorPage from "pages/ErrorPage.tsx";
import SnapTemplate from "templates/SnapTemplate";
import {useEffect} from "react";
import {getFullHeight} from "helpers/getHeight.ts";

export const SERVER_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000' : ''
function App() {

    useEffect(() => {
        getFullHeight();
        window.addEventListener('resize', () => getFullHeight())
    }, []);

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={
                    <SnapTemplate>
                        <IndexPage />
                    </SnapTemplate>
                } />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/edu" element={<EduPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/ui" element={<UiPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default App
