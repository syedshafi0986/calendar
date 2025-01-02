import React from "react";

const EventItem = ({ event }) => {
    console.log("event of event items ",event)
    return (
        <li className="mb-2">
            <strong>Event name:{event.eventName}</strong>
            <p>{event.startTime} - {event.endTime}</p>
            <p>{event.description}</p>
        </li>
    );
};

export default EventItem;
