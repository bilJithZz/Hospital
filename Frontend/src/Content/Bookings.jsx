import React, { useState } from "react";

const BookingSystem = () => {


  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [timePeriod, setTimePeriod] = useState("Morning");

  
  const generateWeekDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
    
  };

  

  const weekDates = generateWeekDates();

  console.log(weekDates)

 
  const timeSlots = {
    Morning: ["10:00 AM", "11:00 AM", "12:00 PM"],
    Afternoon: ["01:00 PM", "02:00 PM", "03:00 PM"],
    Evening: ["04:00 PM", "05:00 PM", "06:00 PM"],
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Book an Appointment</h2>
      <p>Select your date and time for the appointment:</p>

      {/* Date Picker */}
      <div style={{ display: "flex", overflowX: "auto", marginBottom: "20px" }}>
        {weekDates.map((date, index) => (
          <div
            key={index}
            onClick={() => setSelectedDate(date)}
            style={{
              cursor: "pointer",
              padding: "10px 20px",
              margin: "5px",
              borderRadius: "5px",
              backgroundColor:
                selectedDate.toDateString() === date.toDateString()
                  ? "#007bff"
                  : "#f8f9fa",
              color:
                selectedDate.toDateString() === date.toDateString()
                  ? "white"
                  : "black",
              textAlign: "center",
            }}
          >
            <div>{date.toDateString().split(" ")[0]}</div>
            <div>{date.getDate()}</div>
          </div>
        ))}
      </div>

     
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        {Object.keys(timeSlots).map((period) => (
          <button
            key={period}
            onClick={() => setTimePeriod(period)}
            style={{
              padding: "10px 20px",
              margin: "0 5px",
              borderRadius: "5px",
              backgroundColor: timePeriod === period ? "#007bff" : "#f8f9fa",
              color: timePeriod === period ? "white" : "black",
              cursor: "pointer",
            }}
          >
            {period}
          </button>
        ))}
      </div>

     
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {timeSlots[timePeriod].map((slot, index) => (
          <button
            key={index}
            onClick={() => setSelectedTimeSlot(slot)}
            style={{
              padding: "10px 20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: "#f8f9fa-",
            }}
          >
            {slot}
          </button>
        ))}
      </div>

    
      <div style={{ marginTop: "20px" }}>
        {selectedTimeSlot ? (
          <p>
            <strong>Selected:</strong> {selectedDate.toDateString()} at {selectedTimeSlot}
          </p>
        ) : (
          <p>Please select a time slot.</p>
        )}
      </div>
    </div>
  );
};

export default BookingSystem;
