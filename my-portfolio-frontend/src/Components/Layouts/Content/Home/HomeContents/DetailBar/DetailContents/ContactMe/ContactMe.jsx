import "./ContactMe.css"
import ContactTitle_Pic from "../../../../../../../../Assests/Titles/Contact-Title.png"
import ContactBackground from "../../../../../../../../Assests/Contact/Background-Contact.png"
import Location from "../../../../../../../../Assests/Contact/Location.png"
import Mail from "../../../../../../../../Assests/Contact/Mail.png"
import Call from "../../../../../../../../Assests/Contact/Call.png"

function ContactMe() {
    return (
        <div className="ContactMe">
            <div className="Contact-Title">
                <h6 className="pt-3 pb-2 ps-3">Contact me...</h6>
                <img src={ContactTitle_Pic} alt="ContactTitle" />
            </div>

            <div className="Personal-Details px-4">
                <div className="My-Details pt-3">
                    <h6 className="pb-2">Personal Information</h6>

                    <div className="My-Info">
                        <img src={Location} alt="Location" />
                        <p>No : 19/4, Dambutuwa, Debahera<br></br>via Nittambuwa, ( Gampaha )<br></br>Sri Lanka</p>
                    </div>

                    <div className="My-Info">
                        <img src={Mail} alt="Email" />
                        <p>chamith.ictech@gmail.com</p>
                    </div>

                    <div className="My-Info">
                        <img src={Call} alt="Call" />
                        <p>+94775145320</p>
                    </div>
                </div>

                <div className="Address-Image">
                    <img src={ContactBackground} alt="Information-Icon" />
                </div>
            </div>
        </div>
    )
}
export default ContactMe;