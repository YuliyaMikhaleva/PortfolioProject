import {Route, Routes} from "react-router-dom";
import IndexPage from "../../pages/IndexPage";
import UiPage from "../../pages/UiPage";
import ErrorPage from "../../pages/ErrorPage";
import ContactsPage from "../../pages/ContactsPage";
import EduPage from "../../pages/EduPage";
import ProjectsPage from "../../pages/ProjectsPage";


const AppBody = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/edu" element={<EduPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/ui" element={<UiPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>

    )
}

export default AppBody