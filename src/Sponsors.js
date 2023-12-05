import mlh_logo from "./Sponsors/mlh-logo.png";
import robotic_institute_logo from "./Sponsors/robotics_institute.png";
import uoft_eng_logo from "./Sponsors/uoft_eng_logo.png";
import uoft_ai from "./Sponsors/uoft_ai_logo.png";
import wolfram_logo from "./Sponsors/wolfram_alpha_logo.png";
import vector_logo from "./Sponsors/vector_institute.png";
import solid_works from "./Sponsors/solidworks.png";

import './Sponsors.css';

function Sponsors() {
    return (
        <div id="sponsors" className="section" style={{ paddingTop: "12%" }}>
            <div className="container">
                <h1 className="text-center">Sponsors</h1>
                <h2 style={{paddingTop: "5%"}}>Want to sponsor us? Check out our <a href="https://drive.google.com/file/d/1yhuxijjjOdvd7furPhY_yatJd0xVVd7Q/view?usp=share_link" style={{color:"white"}}>Sponsorship Package</a> and email us at <a href="mailto:hackinfo@utra.ca" style={{color:"white"}}>hackinfo@utra.ca</a>!</h2>
            </div>
            <div className="image-container">
                <a href="https://www.engineering.utoronto.ca/"><img className="fade-in"  style={{ width: "40%", height: "70%", paddingRight: "5%" }} src={uoft_eng_logo} alt="Sponsor 1" /> </a>
                <a  href="https://robotics.utoronto.ca/"><img className="fade-in" style={{ width: "30%", height: "70%", paddingRight: "5%" }} src={robotic_institute_logo} alt="Sponsor 2" /></a>
                <a href="https://mlh.io/"><img className="fade-in" style={{ width: "30%", height: "70%" }} src={ mlh_logo} alt="Sponsor 3" /></a>
                <a href= "https://www.uoft.ai/"><img className="fade-in" style={{ width: "30%", height: "50%" }} src={uoft_ai} alt="Sponsor 4" /></a>
                <a href= "https://www.wolframalpha.com/"><img className="fade-in" style={{ width: "30%", height: "50%", paddingRight: "5%" }} src={wolfram_logo} alt="Sponsor 5" /></a>
                <a href= "https://vectorinstitute.ai/"><img className="fade-in" style={{ width: "30%", height: "50%" }} src={vector_logo} alt="Sponsor 6" /></a>
                <a href= "https://www.solidworks.com/"><img className="fade-in" style={{ width: "30%", height: "50%", padding: "5%"}} src={solid_works} alt="Sponsor 7" /></a>
            </div>
        </div>
    );
} 

export default Sponsors;