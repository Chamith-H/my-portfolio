import "./HomePage.css"

import DetailBox from "../HomeContents/DetailBar/DetailBox/DetailBox";
import ProfileBar from "../HomeContents/ProfileBar/ProfileBar";
import ServicesBar from "../HomeContents/ServicesBar/ServicesBar";
import TechnologyBar from "../HomeContents/TechnologyBar/TechnologyBar";
import TalkingBar from "../HomeContents/TalkingBar/TalkingBar";

function HomePage() {
    return(
        <div className="HomePage">
            <ProfileBar></ProfileBar>
            <DetailBox></DetailBox>
            <ServicesBar></ServicesBar>
            <TechnologyBar></TechnologyBar>
            <TalkingBar></TalkingBar>
        </div>
    )
}
export default HomePage;