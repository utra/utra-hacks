// function FAQ() {
//     return (
//         <div id="faq" className="section">
//             <div className="container">
//             <h2 className="text-center">FAQs</h2>
//             <div className="row">
//                 <div className="col-md-6">
//                 <div className="faq-item">
//                     <h4>Who is UTRA?</h4>
//                     <p>
                    // UTRA stands for the University of Toronto Robotics
                    // Association. We are the largest active robotics group on
                    // campus. Our mission is to foster interests in robotics, and
                    // teach anybody who is interested all that they need to know to
                    // be able to contribute. We are currently running 5 sub-teams at
                    // varying technical skill levels, making it easy for both
                    // beginners and veterans to embrace their passion in robotics.
                    // Our 5 sub-teams include SUMO, RoboSoccer, Combat, Autonomous
                    // Rover Team (ART), and Robonars. Visit our website, www.utra.ca
                    // for more information!
//                     </p>

//                     <h4>
//                     How do hackathons work?<br />
//                     
//                     </h4>
//                     <p>
//                     Hackathons are awesome events where you can dedicate some
//                     hours of your time to come up with a creative solution to a
//                     problem. We will provide you with food, drinks, workshops,
//                     entertainment, and all the caffeine required for you to bring
//                     your idea to life.
//                     </p>

//                     <h4>
//                     <br />
//                     Do I need to bring anything to the hackathon?
//                     </h4>
//                     <p>
//                     Please bring a computer with a USB-A port (or converter), your
//                     signed waiver, and a great attitude!
//                     </p>
//                 </div>
//                 </div>
//                 <div className="col-md-6">
//                 <div className="faq-item">
//                     <h4>What are the themes for 2024 HACKS?</h4>
                    // <p>
                    // 1. Beginner theme: “Robots for Everyday Life - A Better You!”{" "}
                    // <br />
                    // 2. Advanced theme: “Robots for Sustainability and Conservation
                    // - A Better Canada!" <br />
                    // These themes provide a specific focus on robotics and
                    // encourage participants to think about how robots can make a
                    // positive impact on everyday life and environmental
                    // sustainability. It allows participants to explore a wide range
                    // of applications and challenges, catering to both beginners and
                    // professionals.
                    // </p>

//                     <h4>
//                     <br />
//                     When / Where is UTRAHacks?
//                     </h4>
//                     <p>
                    // UTRA Hacks will be hosted at the Myhal centre for Engineering
                    // Innovation and Entrepreneurship at the University of Toronto,
                    // on January 20-21, 2024.
//                     </p>

//                     <h4>
//                     <br />
//                     Can I bring my own hardware?
//                     </h4>
//                     <p>
                    // Yes! Feel free to bring your own hardware. We will be lending
                    // Arduino kits.
//                     </p>

//                     <h4>
//                     <br />
//                     Do I need a team to join?
//                     </h4>
//                     <p>No! You can sign up as an individual.</p>

//                     <h4>
//                     <br />
//                     I'm a beginner. Can I still apply?
//                     </h4>
//                     <p>
                    // Of course! Hackathons are a great opportunity to learn and
                    // grow, especially for beginners. We will also have tons of
                    // mentors and resources to help your throughout the event.
//                     </p>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//     );
// } 

// export default FAQ;


import { Accordion, Container } from "react-bootstrap";
import './FAQ.css';

export default function FAQ() {
  return (
    <Container>
      <h2 className="text-center faq-title">FAQs</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Who is UTRA?</Accordion.Header>
          <Accordion.Body>
                    UTRA stands for the University of Toronto Robotics
                    Association. We are the largest active robotics group on
                    campus. Our mission is to foster interests in robotics, and
                    teach anybody who is interested all that they need to know to
                    be able to contribute. We are currently running 5 sub-teams at
                    varying technical skill levels, making it easy for both
                    beginners and veterans to embrace their passion in robotics.
                    Our 5 sub-teams include SUMO, RoboSoccer, Combat, Autonomous
                    Rover Team (ART), and Robonars. Visit our website, www.utra.ca
                    for more information!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>How do hackathons work?</Accordion.Header>
          <Accordion.Body>
                    Hackathons are awesome events where you can dedicate some hours of your time to come up with a creative solution to a problem. We will provide you with food, drinks, workshops, entertainment, and all the caffeine required for you to bring your idea to life.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Do I need to bring anything to the hackathon?</Accordion.Header>
          <Accordion.Body>
                    Please bring a computer with a USB-A port (or converter), your signed waiver, and a great attitude!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>What are the themes for 2024 HACKS?</Accordion.Header>
          <Accordion.Body>
                <p>
                    1. Beginner theme: “Robots for Everyday Life - A Better You!”{" "}
                    <br />
                    2. Advanced theme: “Robots for Sustainability and Conservation
                    - A Better Canada!" <br />
                    <br />These themes provide a specific focus on robotics and
                    encourage participants to think about how robots can make a
                    positive impact on everyday life and environmental
                    sustainability. It allows participants to explore a wide range
                    of applications and challenges, catering to both beginners and
                    professionals.
                </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>When/Where is UTRA Hacks?</Accordion.Header>
          <Accordion.Body>
                    UTRA Hacks will be hosted at the Myhal centre for Engineering
                    Innovation and Entrepreneurship at the University of Toronto,
                    on January 20-21, 2024.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header> Can I bring my own hardware?</Accordion.Header>
          <Accordion.Body>
                    Yes! Feel free to bring your own hardware. We will be lending
                    Arduino kits.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>Do I need a team to join?</Accordion.Header>
          <Accordion.Body>
                    No! You can sign up as an individual.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>I'm a beginner. Can I still apply?</Accordion.Header>
          <Accordion.Body>
                    Of course! Hackathons are a great opportunity to learn and
                    grow, especially for beginners. We will also have tons of
                    mentors and resources to help your throughout the event.
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </Container>
  );
}

