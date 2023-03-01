import "./MyVision.css"

import Vision from "../../../../../../../../Assests/HomePage/Vision.png"
import VisionTitle_Pic from "../../../../../../../../Assests/Titles/Vision-Title.png"

function MyVision() {
    return (
        <div className="MyVision">
            <div className="Vision-Title">
                <h6 className="pt-3 pb-2 ps-3">My Vision...</h6>
                <img src={VisionTitle_Pic} alt="Vision-Title_Pic" />
            </div>
            
            <p className="px-5 py-3">My mission is to utilize my skills and knowledge as a full-stack developer to create innovative and impactful software solutions while continuously growing as a professional and delivering exceptional results for my clients.</p>
            <img className="" src={Vision} alt="My_Mission"/>
        </div>
    )
}
export default MyVision;