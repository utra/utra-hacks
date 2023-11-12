import ScheduleItem from "./ScheduleItem";
import "./Schedule.css";
import { Container, Row, Col } from "react-bootstrap";

function Schedule() {
    return (
      <Container fluid className="schedule-background">
        <div id="schedule" className="container py-7 mx-auto" style={{ paddingTop: "12%" }}>
          <h1 className="text-letter-spacing-xs my-0 text-light font-weight-bold text-center mb-5 schedule-title">
            Schedule
          </h1>
  
          <Container className="mx-auto" style={{ paddingLeft: "10%" }}>
            <Row className="justify-content-center">
              <Col lg={5} md={11} sm={12} className="mb-2">
                <h4 className="mt-0 mb-3 text-light op-8 font-weight-bold"> Saturday, January 20th </h4>
                <ul className="list-timeline list-timeline-primary justify-content-center">
                  <ScheduleItem event={"Participant Registration"} time={"9:30 AM"} />
                  <ScheduleItem event={"Opening Ceremonies"} time={"10:30 AM"} />
                  <ScheduleItem event={"Hacking Begins!"} time={"11:30 AM"} />
                  <ScheduleItem event={"Lunch"} time={"1:00 PM"} />
                  <ScheduleItem event={"Workshops/Activities/Panels"} time={"2:00 PM"} />
                  <ScheduleItem event={"Dinner"} time={"6:00 PM"} />
                </ul>
              </Col>
              <Col lg={4} md={11} sm={12} className="mb-2">
                <h4 className="mt-0 mb-3 text-light op-8 font-weight-bold">Sunday, January 21st</h4>
                <ul className="list-timeline list-timeline-primary justify-content-center">
                  <ScheduleItem event={"Breakfast"} time={"9:00 AM"} />
                  <ScheduleItem event={"Workshops/Activities/Panels"} time={"10:00 AM"} />
                  <ScheduleItem event={"Hacking Ends! + Lunch"} time={"1:30 PM"} />
                  <ScheduleItem event={"Judging Time"} time={"2:00 PM"} />
                  <ScheduleItem event={"Closing Ceremonies"} time={"5:00 PM"} />
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    );
  }
  
  export default Schedule;