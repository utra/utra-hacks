import ScheduleItem from "./ScheduleItem";
import "./Schedule.css";

function Schedule() {
    return (
        <div id="schedule" class="container py-7">
            <h1 class="text-letter-spacing-xs my-0 text-light font-weight-bold text-center mb-5">
                Schedule
            </h1>

            <div class="row">
                <div class="col-lg-4 mb-3">
                    <h4 class="mt-0 mb-3 text-light op-8 font-weight-bold">
                        Saturday Jan. 20th
                    </h4>
                    <ul class="list-timeline list-timeline-primary">
                        <ScheduleItem event={"Participant Registration"} time={"9:30 AM"}/>
                        <ScheduleItem event={"Opening Ceremonies"} time={"10:30 AM"}/>
                        <ScheduleItem event={"Hacking Begins!"} time={"11:30 AM"}/>
                        <ScheduleItem event={"Lunch"} time={"1:00 PM"}/>
                        <ScheduleItem event={"Workshops/Activities/Panels"} time={"2:00 PM"}/>
                        <ScheduleItem event={"Dinner"} time={"6:00 PM"}/>
                    </ul>
                </div>

                <div class="col-lg-4 mb-3">
                    <h4 class="mt-0 mb-3 text-light op-8 font-weight-bold">Sunday Jan. 21st</h4>
                    <ul class="list-timeline list-timeline-primary">
                        <ScheduleItem event={"Breakfast"} time={"9:00 AM"}/>
                        <ScheduleItem event={"Workshops/Activities/Panels"} time={"10:00 AM"}/>
                        <ScheduleItem event={"Hacking Ends! + Lunch"} time={"1:30 PM"}/>
                        <ScheduleItem event={"Judging Time"} time={"2:00 PM"}/>
                        <ScheduleItem event={"Closing Ceremonies"} time={"5:00 PM"}/>
                    </ul>
                </div>
            </div>
        </div>
    );

} export default Schedule;