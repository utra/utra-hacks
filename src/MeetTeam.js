import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PersonCard from './PersonCard';
import Director1 from "./Meet The Team Photos/Micol_Headshot - Hackathon UTRA.jpeg";
import SolidWorks from "./Sponsors/solidworks.jpg";
import './AboutUs.css'; // Import custom CSS for styling

function MeetTeam () {
    return (
        <div>
            <section className='bg text text-center pt-5'>
                <h1>Meet the Team that Makes All This Possible</h1>

                <Row>
                    <Col>
                        <PersonCard
                            name="Hackathon Director"
                            photoUrl={Director1}
                            linkedinUrl=""
                            githubUrl=""
                        />
                    </Col>

                    <Col>
                        <PersonCard
                            name="Hackathon Director"
                            photoUrl=""
                            linkedinUrl=""
                            githubUrl=""
                        />
                    </Col>
                </Row>
            </section>

            <section className='alternate_bg bg text text-center pt-5'>
                <h1 className='pt-5'>Our Sponsors</h1>
                <Row className='pt-5 mt-5'>
                    <Col>
                        <img style = {{width: "20%"}} src = {SolidWorks} alt = "SolidWorks"/>
                    </Col>
                </Row>
            </section>
        </div>

    );
}

export default MeetTeam;