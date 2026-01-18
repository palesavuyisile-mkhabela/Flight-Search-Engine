import { create } from "zustand";

type State = {
  flights: any[];
  filtered: any[];
  priceRange: number[];
  stops: number[];
  setFlights: (f: any[]) =&gt; void;
  setPriceRange: (p: number[]) =&gt; void;
  setStops: (s: number[]) =&gt; void;
};

export const useFlightStore = create&lt;State&gt;((set, get) =&gt; ({
  flights: [],
  filtered: [],
  priceRange: [0, 2000],
  stops: [],

  setFlights: (flights) =&gt;
    set({ flights, filtered: flights }),

  setPriceRange: (priceRange) =&gt; {
    const { flights, stops } = get();
    set({
      priceRange,
      filtered: flights.filter(f =&gt;
        Number(f.price.total) &gt;= priceRange[0] &amp;&amp;
        Number(f.price.total) &lt;= priceRange[1] &amp;&amp;
        (stops.length === 0 ||
          stops.includes(f.itineraries[0].segments.length - 1))
      ),
    });
  },

  setStops: (stops) =&gt; {
    const { flights, priceRange } = get();
    set({
      stops,
      filtered: flights.filter(f =&gt;
        Number(f.price.total) &gt;= priceRange[0] &amp;&amp;
        Number(f.price.total) &lt;= priceRange[1] &amp;&amp;
        (stops.length === 0 ||
          stops.includes(f.itineraries[0].segments.length - 1))
      ),
    });
  },
}));
