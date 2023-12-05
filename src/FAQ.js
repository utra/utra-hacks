import { Accordion, Container} from "react-bootstrap";

import './FAQ.css';

export default function FAQ() {
  return (
    
    <Container id = "faq" className="section" style={{ paddingTop: "12%" }}>
      <h1 className="text-center faq-title">Frequently Asked Questions</h1>
      <Accordion className="accordion-container">
          <Accordion.Item eventKey="0" className="accordion-item">
            <Accordion.Header className="accordion-header">What is UTRA Hacks?</Accordion.Header>
            <Accordion.Body>
                UTRA Hacks is Canada's emerging 2-day robotics hackathon hosted by the University of Toronto Robotics Association (UTRA) and the Robotics Institute. We aim to inspire creativity, enable collaboration and foster skill development. Participants connect face-to-face, collaborate with global students, and engage with industry leaders and mentors. The event sparks inspiration and opens minds to endless possibilities. Hackers of all experience levels can join workshops, tech talks, and career sessions to learn something new. UTRA Hacks supports participants by providing necessary equipment, so that the sky's the limit!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="accordion-item">
            <Accordion.Header>Who is UTRA?</Accordion.Header>
            <Accordion.Body>
                UTRA (University of Toronto Robotics Association) is the largest robotics group on campus. Our mission is to foster interests in robotics, and teach anybody who is interested all that they need to know to be able to contribute. We are currently running 5 sub-teams at varying technical skill levels, making it easy for both beginners and veterans to embrace their passion in robotics. Our 5 sub-teams include SUMO, RoboSoccer, Combat, Autonomous Rover Team (ART), and Robonars. Visit www.utra.ca for more information!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="accordion-item">
            <Accordion.Header>How is UTRA Hacks challenging hackathon culture?</Accordion.Header>
            <Accordion.Body>
            UTRA Hacks believes in enabling anyone from any background with any interest to come together and build impactful tech while having fun and meeting new people. UTRA Hacks is unique. We strive to: 1) facilitate hackers resting during the hackathon, 2) allow teams to gain meaningful feedback from industry professionals on their projects which they can use in future design projects, 3) get serious about robotics education by having teams mentored by passionate graduate students, 4) encourage collaboration between technical and non-technical backgrounds, and 5) develop and implement recommendations from consultations with EDIA and mental health community stakeholders and subject matter experts. Whether you're here to hone your robotics skillset, explore a new field, or meet new people, UTRA Hacks is here for you.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="accordion-item">
            <Accordion.Header>What are the themes for 2024 HACKS?</Accordion.Header>
            <Accordion.Body>
                  <p>
                    This year's themes are: healthcare, space and the environment! 
                    These themes provide a specific focus on robotics and encourage participants to think about 
                    how robots can make a positive impact on everyday life and beyond. We encourage participants to 
                    make their project their own. (For example, autonomous vehicles could fit into any category depending 
                    on how you frame your robot!) It allows participants to explore a wide range of applications and 
                    challenges, catering to both beginners and professionals.
                  </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4" className="accordion-item">
            <Accordion.Header>How much does it cost to attend UTRA Hacks?</Accordion.Header>
            <Accordion.Body>
                Admission to UTRA Hacks is completely free! We will also provide food and accommodation for the entire event, as well as all the resources and mentorship our hackers need to build something incredible.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5" className="accordion-item">
            <Accordion.Header> What if I've never been to a hackathon before?</Accordion.Header>
            <Accordion.Body>
                UTRA Hacks welcomes students of all skill levels. Many students attend Hack the North as their first hackathon, and they always have a blast! We'll provide tech resources (including hardware), mentors, and workshops to help you with your project. Hackathons can be a great place to learn new skills in a short amount of time. Just be eager to learn, and excited to meet lots of awesome people.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6"className="accordion-item" >
            <Accordion.Header>What kind of workshops, talks, and activities will there be?</Accordion.Header>
            <Accordion.Body>
                Previously, we've held workshops and talks for a range of skill levels from beginner to advanced like intro to ROS, computer vision, hardware security and autonomous vehicles. Other workshops also explore building a career in tech and various programming tools. Activities like demos, networking & meetups, and even karaoke happen throughout the weekend. Whether it’s for relaxation or health, novelty or competition, our team has something exciting prepared for you to enjoy!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7" className="accordion-item">
            <Accordion.Header>When do hacker applications open?</Accordion.Header>
            <Accordion.Body>
                Hacker applications are open and will close on Friday, December 1st at 11:59 pm ET. Apply now!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8" className="accordion-item">
            <Accordion.Header>I'm not currently enrolled as a student, can I still attend UTRA Hacks?</Accordion.Header>
            <Accordion.Body>
                UTRA Hacks is geared towards students who are interested in tech, but we also want to open the doors for anyone who wants to learn. If your situation falls within this category, please reach out to us at hackathon@utra.ca and we can chat more regarding certain exemptions!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="9" className="accordion-item">
            <Accordion.Header>Will UTRA Hacks 2024 happen in person or virtually?</Accordion.Header>
            <Accordion.Body>
                UTRA Hacks aims to provide participants with the best experience possible, and we strongly feel that an in-person event is the best way to empower our hackers to dream big and build. We will not be offering a virtual attendance option this year.            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="10" className="accordion-item">
            <Accordion.Header>Who can participate?</Accordion.Header>
            <Accordion.Body>
               Students of any education level from anywhere in the world are eligible to apply for UTRA Hacks! All attendees must be 17 years or older to participate.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="11" className="accordion-item">
            <Accordion.Header>How many people can be on a team? Do I need to have a team to apply?</Accordion.Header>
            <Accordion.Body>
                Hackers may form teams of up to 6 people. There are no restrictions for who they can be, so you can team up with hackers from any school, country, or experience level. Teams can be formed before or during the event at hackers' own discretion.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="12" className="accordion-item">
            <Accordion.Header>What if I need to travel internationally to attend UTRA Hacks?</Accordion.Header>
            <Accordion.Body>
                Please note that visitor visa wait times may be as long as several months, depending on the country of departure. We recommend you apply for your visa, if required, immediately after receiving your acceptance to UTRA Hacks. For all international hackers with the exception of U.S. citizens, <b><i>begin your visa application immediately after receiving your offer</i></b>. Unfortunately, we will not be reimbursing travel expenditures.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
    </Container>
  );
}

