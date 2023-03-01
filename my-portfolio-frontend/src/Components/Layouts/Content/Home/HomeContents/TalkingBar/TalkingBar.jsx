import "./TalkingBar.css"
import Idea from "../../../../../../Assests/Others/Idea.png"

function TalkingBar() {
    return(
        <div className="TalkingBar">
            <div className="Align-Talking py-5">
                <div className="col-8 py-4">
                    <div className="Talking-Box py-5">
                        <div className="row g-0">
                            <div className="col-8">
                                <div class="Idea-Description">
                                    <h2 className="pt-4 pb-2">GOT A <span>PROJECT</span> OR IDEA . . ?</h2>
                                    <img className="pt-4" src={Idea} alt="Idea-Icon" />
                                </div>
                            </div>

                            <div className="col-4 pe-4 pt-1">
                                <div class="Idea-Form py-4">
                                    <form class="">
                                        <h4>Let's talk...!</h4>

                                        <div class="Form-Data">
                                            <div class="Form-Input">
                                                <label>Name</label>
                                                <input placeholder="Your name"></input>
                                            </div>

                                            <div class="Form-Input">
                                                <label>Email</label>
                                                <input placeholder="Your e-mail"></input>
                                            </div>

                                            <div class="Form-Input">
                                                <label>Comment or message</label>
                                                <textarea placeholder="Send me a message"></textarea>
                                            </div>

                                            <button>SEND ME</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TalkingBar