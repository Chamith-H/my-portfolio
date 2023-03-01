import { Routes, BrowserRouter as Router, Route} from "react-router-dom";

import HomePage from "../Layouts/Content/Home/HomePage/HomePage";
import MyMission from "../Layouts/Content/Home/HomeContents/DetailBar/DetailContents/MyMission/MyMission";
import MyVision from "../Layouts/Content/Home/HomeContents/DetailBar/DetailContents/MyVision/MyVision";
import Education from "../Layouts/Content/Home/HomeContents/DetailBar/DetailContents/Education/Education";
import ContactMe from "../Layouts/Content/Home/HomeContents/DetailBar/DetailContents/ContactMe/ContactMe";

function MainRoutes() {
    return (
        <div className="MainRoutes">
            <Router>
                <Routes>
                    <Route path='/' element={ <HomePage/> }>
                        <Route path='/' element={ <MyMission/> }></Route>
                        <Route path='/vision' element={ <MyVision/> }></Route>
                        <Route path='/education' element={ <Education/> }></Route>
                        <Route path='/contact' element={ <ContactMe/> }></Route>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}
export default MainRoutes;