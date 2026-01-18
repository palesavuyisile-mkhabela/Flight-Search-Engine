"use client";
import { useState } from "react";
import { useFlightStore } from "@/store/flightStore";

export default function SearchForm() {
  const setFlights = useFlightStore(s =&gt; s.setFlights);
  const [origin, setOrigin] = useState("JFK");
  const [destination, setDestination] = useState("LHR");
  const [date, setDate] = useState("");

  async function search() {
    const res = await fetch(
      `/api/flights?origin=${origin}&amp;destination=${destination}&amp;date=${date}`
    );
    const data = await res.json();
    setFlights(data);
  }

  return (
    &lt;div className="flex flex-col md:flex-row gap-4"&gt;
      &lt;input
        className="input"
        value={origin}
        onChange={e =&gt; setOrigin(e.target.value)}
        placeholder="Origin"
      /&gt;
      &lt;input
        className="input"
        value={destination}
        onChange={e =&gt; setDestination(e.target.value)}
        placeholder="Destination"
      /&gt;
      &lt;input
        className="input"
        type="date"
        onChange={e =&gt; setDate(e.target.value)}
      /&gt;
      &lt;button onClick={search} className="btn"&gt;Search&lt;/button&gt;
    
  );
}
