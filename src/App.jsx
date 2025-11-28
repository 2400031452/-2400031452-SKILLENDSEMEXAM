import React, { useState, useCallback } from "react";
import EventCard from "./EventCard";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const [events] = useState([
    { id: 1, name: "React Workshop" },
    { id: 2, name: "JavaScript Conference" },
    { id: 3, name: "CSS Masterclass" },
  ]);

  const [bookedEvents, setBookedEvents] = useState([]);

  const handleBookEvent = useCallback((id) => {
    console.log(`Booking event ID: ${id}`);
    setBookedEvents((prev) => [...prev, id]);
  }, []);

  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <p>Booked Events: {bookedEvents.join(", ") || "None"}</p>
        {events.map((event) => (
          <EventCard key={event.id} event={event} onBook={handleBookEvent} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
