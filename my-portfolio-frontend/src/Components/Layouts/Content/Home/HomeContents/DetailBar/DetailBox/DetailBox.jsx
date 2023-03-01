import "./DetailBox.css"
import { Link, Outlet } from "react-router-dom"
import ProfilePic from "../../../../../../../Assests/HomePage/ProfilePic.jpg"

function DetailBox() {
    return (
        <div className="DetailBox">
            <div className="Align-Details pb-5">
                <div className="col-10">
                <div className="Box-Content mb-4">
                    <div className="row g-0">
                        <div className="col-4 Profile-Background">
                            <div className="Profile-Detail pt-5">
                                <div className="Profile-Pic mt-4">
                                    <img src={ProfilePic} alt="Pic" />
                                </div>

                                <div className="Profile-Info pt-4">
                                    <h4>Chamith Hirushan</h4>
                                    <h5>Fullstack Developer</h5>
                                    <h6>Bsc. (Hons) Computer Systems & <br></br>Network Engineering<br></br>SLIIT</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-8 Navigate-Contents">
                            <div className="Navigate-Buttons py-3">
                                <Link className="Navigate-Link" to=''>My mission</Link>
                                <Link className="Navigate-Link" to='vision'>My vision</Link>
                                <Link className="Navigate-Link" to='education'>Education</Link>
                                <Link className="Navigate-Link" to='contact'>Contact me</Link>
                            </div>

                            <div className="Route-Contents">
                                <div className="Align-Outlet pb-4">
                                    <Outlet></Outlet>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default DetailBox;