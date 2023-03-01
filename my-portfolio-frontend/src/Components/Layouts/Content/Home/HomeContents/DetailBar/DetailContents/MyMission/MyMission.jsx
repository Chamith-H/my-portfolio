import "./MyMission.css"
import Mission from "../../../../../../../../Assests/HomePage/Mission.png"
import MissionTitle_Pic from "../../../../../../../../Assests/Titles/Mission-Title.png"

function MyMission() {
    return (
        <div className="MyMission">
            <div className="Mission-Title">
                <h6 className="pt-3 pb-2 ps-3">My Mission...</h6>
                <img src={MissionTitle_Pic} alt="MissionPic" />
            </div>

            <p className="px-5 py-3">My mission is to utilize my skills and knowledge as a full-stack developer to create innovative and impactful software solutions while continuously growing as a professional and delivering exceptional results for my clients.</p>
            <img className="Mission-Content-Image" src={Mission} alt="My_Mission"/>
        </div>
    )
}
export default MyMission;