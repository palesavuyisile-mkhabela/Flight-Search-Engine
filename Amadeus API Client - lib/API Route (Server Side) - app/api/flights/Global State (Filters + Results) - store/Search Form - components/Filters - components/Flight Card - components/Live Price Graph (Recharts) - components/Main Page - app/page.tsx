import SearchForm from "@/components/SearchForm";
import Filters from "@/components/Filters";
import FlightCard from "@/components/FlightCard";
import PriceChart from "@/components/PriceChart";
import { useFlightStore } from "@/store/flightStore";

export default function Home() {
  const flights = useFlightStore(s =&gt; s.filtered);

  return (
    &lt;main className="p-6 grid md:grid-cols-4 gap-6"&gt;
      &lt;aside className="md:col-span-1"&gt;
        &lt;SearchForm /&gt;
        &lt;Filters /&gt;
      &lt;/aside&gt;

      &lt;section className="md:col-span-3 space-y-6"&gt;
        &lt;PriceChart /&gt;
        &lt;div className="grid gap-4"&gt;
          {flights.map((f, i) =&gt; (
            &lt;FlightCard key={i} flight={f} /&gt;
          ))}
        
      &lt;/section&gt;
    &lt;/main&gt;
  );
}
