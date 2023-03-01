import "./ServicesBar.css"

import UiUx from "../../../../../../Assests/HomePage/UI-Ux.png"
import FrontEnd from "../../../../../../Assests/HomePage/Front-End.png"
import BackEnd from "../../../../../../Assests/HomePage/Back-End.png"
import Database from "../../../../../../Assests/HomePage/Database.png"

function ServicesBar() {

    const myWorks = [
        {
            job: 'UI/UX Designing',
            image: UiUx,
            description: 'Sample description for testing this web'
        },

        {
            job: 'Front-end Development',
            image: FrontEnd,
            description: 'Sample description for testing this web'
        },

        {
            job: 'Back-end Development',
            image: BackEnd,
            description: 'Sample description for testing this web'
        },

        {
            job: 'Database Management',
            image: Database,
            description: 'Sample description for testing this web'
        },
    ]

    return (
        <div className="ServicesBar">
            <div className="Align-Services">
                <div class="d-flex justify-content-center">
                    <div class="col-10 col-md-10 col-lg-9 col-xl-8 pt-5 pb-4">
                        <div class="Work-Content pb-4">
                            <h2>I PROVIDE&nbsp;<span>EXCELLENT&nbsp;</span>SERVICES FOR YOU</h2>
                        </div>

                        <div class="row">

                            {myWorks.map((work) => (
                                <div class="col-12 col-sm-6 col-md-3 pb-4">
                                    <div class="d-flex justify-content-center">
                                        <div class="col-12 col-sm-11 col-md-12">
                                            <div class="Single-Work pt-5 pb-2">
                                                <img class="mt-3" src={work.image}></img>
                                                <h6>{work.job}</h6>
                                                <p>{work.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServicesBar;