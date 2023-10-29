import Schedule_Item from "./Schedule_Item";
import "./Schedule.css";

function Schedule() {
    return (
        <div id="schedule" class="container py-7">
            <h2 class="text-letter-spacing-xs my-0 text-light font-weight-bold text-center mb-5">
                Schedule
            </h2>

            <div class="row">
                <div class="col-lg-4 mb-3">
                    <h4 class="mt-0 mb-3 text-light op-8 font-weight-bold">
                        Saturday Jan. 20th
                    </h4>
                    <ul class="list-timeline list-timeline-primary">
                        <Schedule_Item event={"Participant Registration"} time={"9:30 AM"}/>
                        <Schedule_Item event={"Opening Ceremonies"} time={"10:30 AM"}/>
                        <Schedule_Item event={"Hacking Begins!"} time={"11:30 AM"}/>
                        <Schedule_Item event={"Lunch"} time={"1:00 PM"}/>
                        <Schedule_Item event={"Workshops/Activities/Panels"} time={"2:00 PM"}/>
                        <Schedule_Item event={"Dinner"} time={"6:00 PM"}/>
                    </ul>
                </div>

                <div class="col-lg-4 mb-3">
                    <h4 class="mt-0 mb-3 text-light op-8 font-weight-bold">Sunday Jan. 21st</h4>
                    <ul class="list-timeline list-timeline-primary">
                        <Schedule_Item event={"Breakfast"} time={"9:00 AM"}/>
                        <Schedule_Item event={"Workshops/Activities/Panels"} time={"10:00 AM"}/>
                        <Schedule_Item event={"Hacking Ends! + Lunch"} time={"1:30 PM"}/>
                        <Schedule_Item event={"Judging Time"} time={"2:00 PM"}/>
                        <Schedule_Item event={"Closing Ceremonies"} time={"5:00 PM"}/>
                    </ul>
                </div>
            </div>
        </div>
    );

} export default Schedule;