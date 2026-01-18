export default function FlightCard({ flight }: any) {
  const segments = flight.itineraries[0].segments;
  return (
    &lt;div className="border rounded p-4"&gt;
      &lt;div className="font-bold"&gt;${flight.price.total}
      <div>{segments.length - 1} stops</div>
      <div>{segments[0].departure.iataCode} → {segments.at(-1).arrival.iataCode}</div>
    
  );
        }
