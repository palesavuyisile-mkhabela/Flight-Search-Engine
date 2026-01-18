"use client";
import { useFlightStore } from "@/store/flightStore";

export default function Filters() {
  const setStops = useFlightStore(s =&gt; s.setStops);

  return (
    &lt;div className="space-y-4"&gt;
      &lt;h3 className="font-bold"&gt;Stops
      &lt;label&gt;
        &lt;input type="checkbox" onChange={() =&gt; setStops([0])} /&gt; Non-stop
      &lt;/label&gt;
      &lt;label&gt;
        &lt;input type="checkbox" onChange={() =&gt; setStops([1])} /&gt; 1 Stop
      &lt;/label&gt;
      &lt;label&gt;
        &lt;input type="checkbox" onChange={() =&gt; setStops([2])} /&gt; 2+ Stops
      &lt;/label&gt;
    
  );
          }
