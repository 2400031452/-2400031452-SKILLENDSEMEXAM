// src/EventCard.jsx
import React from "react";

const EventCard = React.memo(({ event, onBook }) => {
  console.log(`Rendering EventCard: ${event.name}`);

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{event.name}</h3>
      <button onClick={() => onBook(event.id)}>Book Event</button>
    </div>
  );
});

export default EventCard;
