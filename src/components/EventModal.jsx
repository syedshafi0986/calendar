import React, { useState } from "react";

const EventModal = ({ onClose, onSave, date }) => {
    const [eventName, setEventName] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [description, setDescription] = useState("");

    // Handle Save Event
    const handleSave = () => {
        if (!eventName || !startTime || !endTime || !description) {
            alert("Please fill in all fields.");
            return;
        }

        // Create event object with all necessary fields
        const event = {
            eventName,
            startTime,
            endTime,
            description,
            date: date.toISOString(),  // Save the date in a standard format
        };

        onSave(event); // Pass the event data back to App component
        onClose(); // Close the modal
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
            <div className="bg-slate-800 p-4 rounded shadow w-1/4 flex flex-col gap-3">
                <h2>Add Event</h2>
                <input
                    type="text"
                    placeholder="Event Name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="bg-slate-600 rounded"
                    />
                    <label>
                        Start Time:
                    </label>
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="bg-slate-600 rounded"
                    />
                    <label>
                        End Time:
                    </label>
                <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="bg-slate-600 rounded"
                    />
                    <label >
                        Description:
                    </label>
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-slate-600 rounded"
                />
                <button 
    onClick={handleSave} 
    className="bg-green-500 text-white p-2 rounded text-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
>
    Save
</button>

<button 
    onClick={onClose} 
    className="bg-red-500 text-white p-2 rounded text-lg font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 "
>
    Cancel
</button>

            </div>
        </div>
    );
};

export default EventModal;
