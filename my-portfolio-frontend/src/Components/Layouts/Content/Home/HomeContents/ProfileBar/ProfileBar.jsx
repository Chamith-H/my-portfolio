import "./ProfileBar.css"

function ProfileBar() {
    return (
        <div className="ProfileBar">
            <div className="ProfileContent py-5">
                <div class="row me-0">
                    <div class="col-12 d-flex justify-content-center justify-content-sm-start ps-5">
                        <div class="d-flex align-items-center ps-md-3 py-5">
                            <div class="About-Me ps-lg-5">
                                <div class="My-Details">
                                    <p id="Welcome">HI THERE. . . !</p>

                                    <div class="Name">
                                        <h1 id="intro">I'm&nbsp;</h1>
                                        <h1 id="first">CHAMITH&nbsp;</h1>
                                        <h1 id="last">HIRUSHAN</h1>
                                    </div>
                                </div>

                                <div class="Quote py-3">
                                    <p>" I AM NOT A GREAT PROGRAMMER, BUT I AM JUST A GOOD PROGRAMMER WITH GREAT HABITS. GOOD PROGRAMMERS DO PROGRAMMING, NOT BECAUSE THEY EXPECT TO GET PAID OR GET ADULATION BY THE PUBLIC, BUT BECAUSE IT IS FUN TO PROGRAM."</p>
                                </div>

                                <div class="See-More pt-3 pb-4">
                                    <button id="Projects">MY PROJECTS</button> 
                                    <button id="Skills">MY SKILLS</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileBar;