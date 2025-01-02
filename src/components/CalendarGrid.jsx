import React, { useState, useEffect } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from "date-fns";

const CalendarGrid = ({ events, onDayClick, selectedDate }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Generate the grid days for the current month
    const days = [];
    const startDate = startOfWeek(startOfMonth(currentMonth));
    const endDate = endOfWeek(endOfMonth(currentMonth));

    let day = startDate;
    while (day <= endDate) {
        days.push(day);
        day = addDays(day, 1);
    }

    // Render the day names (Sun, Mon, Tue, etc.)
    const renderDaysOfWeek = () => {
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return (
            <div className="grid grid-cols-7 text-center font-bold ">
                {weekdays.map((weekday, index) => (
                    <div key={index} className="py-2">{weekday}</div>
                ))}
            </div>
        );
    };

    // Render each day on the calendar
    const renderDays = () => {
        return days.map((date, index) => {
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
            const isToday = format(date, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
            const isSelected = selectedDate && format(date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
            const dateKey = format(date, "yyyy-MM-dd");

            // Check if there are any events for this day
            const hasEvents = events[dateKey] && events[dateKey].length > 0;

            return (
                <div
                    key={index}
                    className={`p-4 cursor-pointer text-center 
                        ${isWeekend ? "bg-gray-500" : ""}
                        ${isToday ? "bg-blue-400 text-white" : ""}
                        ${isSelected ? "bg-red-500 text-white border-2 border-red-600" : ""}
                        ${hasEvents ? "bg-green-100" : ""}`}
                    onClick={() => onDayClick(date)}
                >
                    {format(date, "d")}
                    {hasEvents && <div className="text-xl text-black mt-1">l</div>}
                </div>
            );
        });
    };

    return (
        <div>
            <div className="flex justify-between mb-4 mt-32">
                <button
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                    className="px-4 py-2 bg-orange-500 rounded"
                >
                    Previous
                </button>
                <span className="font-bold text-xl">{format(currentMonth, "MMMM yyyy")}</span>
                <button
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                    className="px-4 py-2 bg-orange-500 rounded"
                >
                    Next
                </button>
            </div>
            {renderDaysOfWeek()}
            <div className="grid grid-cols-7 ">{renderDays()}</div>
        </div>
    );
};

export default CalendarGrid;
