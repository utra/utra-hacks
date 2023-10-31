function ScheduleItem({event, time }) {
    return(
        <li class="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column">
            <p class="my-0 text-light flex-fw text-sm"><span class="text-inverse op-8">{time}</span> - {event}</p>
        </li>
                    
    );
}

export default ScheduleItem;