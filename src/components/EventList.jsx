import React from "react";
import EventItem from "./EventItems"; // Ensure the component name matches the file

const EventList = ({ events }) => {
    if (!events || events.length === 0) {
        return (
            <p className="text-center text-gray-500 italic">
                No events for the selected date.
            </p>
        );
    }

    return (
        <div className="w-1/2 ml-32 mt-6 p-4 bg-zinc-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-500 mb-4">Events for Selected Date:</h2>
            <ul className="space-y-6">
                {events.map((event, index) => {
                    const eventDate = new Date(event.date); // Ensure event.date is valid
                    return (
                        <li key={index} className="bg-gray-300 p-4 rounded-lg shadow-sm hover:shadow-lg w-56 transition-shadow duration-300">
                            <div className="flex flex-col space-y-2">
                                <h3 className="text-2xl font-semibold text-zinc-700">{event.eventName}</h3>
                                <p className="text-sm text-gray-600">
                                    <strong className="">Event Date:</strong> {eventDate.toDateString()}
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>Start Time:</strong> {event.startTime}
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>End Time:</strong> {event.endTime}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Description:</strong> {event.description}
                                </p>
                            </div>
                            {/* <EventItem event={event} /> */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default EventList;
