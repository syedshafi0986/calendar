import React, { useState, useEffect } from "react";
import CalendarGrid from "./components/CalendarGrid";
import EventModal from "./components/EventModal";
import EventList from "./components/EventList";

const App = () => {
    const [events, setEvents] = useState(() => {
        // Initialize from localStorage if any data exists
        const savedEvents = localStorage.getItem("calendarEvents");
        return savedEvents ? JSON.parse(savedEvents) : [];
    });

    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle day click
    const handleDayClick = (date) => {
        setSelectedDate(date);  // Set selected date
        setIsModalOpen(true);    // Open the modal
    };

    // Save event to the event list
    const handleSaveEvent = (event) => {
        const newEvent = { ...event, date: selectedDate }; // Add the selected date to the event object
        console.log("Saving Event:", newEvent);

        const updatedEvents = [...events, newEvent];
        setEvents(updatedEvents); // Update events state

        localStorage.setItem("calendarEvents", JSON.stringify(updatedEvents)); // Save to localStorage
        setIsModalOpen(false); // Close modal
    };

    // Close modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Filter events for the selected date
    const eventsForSelectedDate = events.filter((event) => {
        if (!event.date) return false;
        const eventDate = new Date(event.date);
        return eventDate.toDateString() === new Date(selectedDate).toDateString();
    });

    return (
        <div className="flex items-center ml-64 ">
            <CalendarGrid
                events={events}
                onDayClick={handleDayClick}
                selectedDate={selectedDate}
            />
            {isModalOpen && (
                <EventModal
                    onClose={handleCloseModal}
                    onSave={handleSaveEvent}
                    date={selectedDate} // Pass selectedDate to EventModal
                />
            )}
            {selectedDate && <EventList events={eventsForSelectedDate} />}
        </div>
    );
};

export default App;
