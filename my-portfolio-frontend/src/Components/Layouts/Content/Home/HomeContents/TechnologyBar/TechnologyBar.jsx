import "./TechnologyBar.css"

import Angular from "../../../../../../Assests/Technologies/Angular.png"
import AspNET from "../../../../../../Assests/Technologies/AspNET.png"
import Bootstrap from "../../../../../../Assests/Technologies/Bootstrap.png"
import JAVAlogo from "../../../../../../Assests/Technologies/JAVA.png"
import Laravel from "../../../../../../Assests/Technologies/Laravel.png"
import MongoDB from "../../../../../../Assests/Technologies/MongoDB.png"
import NodeJS from "../../../../../../Assests/Technologies/NodeJS.png"
import PHPlogo from "../../../../../../Assests/Technologies/PHP.png"
import ReactLogo from "../../../../../../Assests/Technologies/React.png"
import SCSSlogo from "../../../../../../Assests/Technologies/SCSS.png"
import SpringBoot from "../../../../../../Assests/Technologies/SpringBoot.png"
import sql from "../../../../../../Assests/Technologies/SQL.png"

function TechnologyBar() {

    const myTechnologies = [
        {
            image: ReactLogo
        },

        {
            image: Angular
        },

        {
            image: NodeJS
        },

        {
            image: Laravel
        },

        {
            image: SpringBoot
        },

        {
            image: AspNET
        },

        {
            image: sql
        },

        {
            image: MongoDB
        },

        {
            image: JAVAlogo
        },

        {
            image: PHPlogo
        },

        {
            image: Bootstrap
        },

        {
            image: SCSSlogo
        },
    ]

    return (
        <div className="TechnologyBar">
            <div class="col-11 py-5">
                <div class="Technologies">
                    <div class="row">
                        <div class="col-12 col-lg-8">
                            <div class="Technology-Description">
                                <div class="Technology-Content pb-4">
                                    <h2>USE&nbsp;<span>MODERN&nbsp;</span>TECHNOLOGIES</h2>
                                </div>

                                <div class="Technology-Paragraph pe-4">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad minima modi sed quaerat. Quis, sit? Illum aliquam nulla quo ab dolore veritatis similique nihil, eum aliquid sed temporibus, corporis laboriosam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad minima modi sed quaerat. Quis, sit? Illum aliquam nulla quo ab dolore veritatis similique nihil, eum aliquid sed temporibus, corporis laboriosam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad minima modi sed quaerat. Quis, sit? Illum aliquam nulla quo ab dolore veritatis similique nihil, eum aliquid sed temporibus, corporis laboriosam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad minima modi sed quaerat. Quis, sit? Illum aliquam nulla quo ab dolore veritatis similique nihil, eum aliquid sed temporibus, corporis laboriosam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad minima modi sed quaerat. Quis, sit? Illum </p>
                                </div>

                                <div class="Technology-Button pt-2">
                                    <button id="Ideas-Button">SEE MY IDEAS</button>
                                    <button id="Learn-Button">HOW TO LEARN</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-lg-4 d-flex align-items-center pt-3">
                            <div class="row">

                                {myTechnologies.map((technology) => (
                                    <div class="col-3 col-sm-2 col-lg-4 col-xl-3 py-2">
                                        <div class="Single-Technology">
                                            <img src={technology.image}></img>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default TechnologyBar;