import mlh_logo from "./Sponsors/mlh.png";
import robotic_institute_logo from "./Sponsors/utoronto-robotics.png"
import uoft_eng_logo from "./Sponsors/uoft_eng_logo.png"
import './Sponsors.css';

function Sponsors() {
    return (
        <div id="sponsors" className="section">
            <div className="container">
                <h1 className="text-center">Sponsors</h1>
                <h2 style={{paddingTop: "5%"}}>Want to sponsor us? Check out our <a href="https://drive.google.com/file/d/1yhuxijjjOdvd7furPhY_yatJd0xVVd7Q/view?usp=share_link" style={{color:"white"}}>Sponsorship Package</a> and email us at <a href="mailto:hackinfo@utra.ca" style={{color:"white"}}>hackinfo@utra.ca</a>!</h2>
            </div>
            <div className="image-container">
                <img className="fade-in" style={{ width: "40%", height: "70%", paddingRight: "5%" }} src={mlh_logo} alt="Sponsor 1" />
                <img className="fade-in" style={{ width: "40%", height: "70%", paddingRight: "5%" }} src={robotic_institute_logo} alt="Sponsor 2" />
                <img className="fade-in" style={{ width: "50%", height: "70%" }} src={uoft_eng_logo} alt="Sponsor 3" />
            </div>
        </div>
    );
} 

export default Sponsors;