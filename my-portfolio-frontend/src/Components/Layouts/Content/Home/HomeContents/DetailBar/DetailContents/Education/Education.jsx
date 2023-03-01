import "./Education.css"
import Degree from "../../../../../../../../Assests/Others/Degree.png"
import EducationPic from "../../../../../../../../Assests/Others/Education.png"
import EducationTitle_Pic from "../../../../../../../../Assests/Titles/Education-Title.png"

function Education() {
    return (
        <div className="Education">
            <div className="Education-Title">
                <h6 className="pt-3 pb-2 ps-3">Education...</h6>
                <img src={EducationTitle_Pic} alt="Education-Title_Pic" />
            </div>

            <div className="Learn-Detail mb-3">
                <div className="row g-0">
                    <div className="col-10 ps-4 pt-3">
                        <h6>Degree</h6>
                        <p>Bsc. (Hons) Information Technology specialized in<br></br>Computer Systems and Network Engineering<br></br><span>Sri Lanka Institute of Information Technology<br></br>Malabe</span></p>
                    </div>

                    <div className="col-2 d-flex justify-content-center align-items-center pe-2">
                        <img src={Degree} alt="" />
                    </div>
                </div>
            </div>

            <div className="Learn-Detail">
                <div className="row g-0">
                    <div className="col-10 ps-4 pt-3">
                        <h6>Secondary Education</h6>
                        <p>G.C.E. Advanced Level - ( <span>Physical Stream</span> )<br></br>G.C.E. Ordinary Level - ( <span>2013</span> )<br></br><span>Bandaranayake College Gampaha</span></p>
                    </div>

                    <div className="col-2 d-flex justify-content-center align-items-center pe-2">
                        <img src={EducationPic} alt="" />
                    </div>
                </div>
            </div>

            <div className="More-Education">
                <button id="Certificates">See my certificates</button>
                <button id="Archievements">See my archievements</button>
            </div>
        </div>
    )
}
export default Education;