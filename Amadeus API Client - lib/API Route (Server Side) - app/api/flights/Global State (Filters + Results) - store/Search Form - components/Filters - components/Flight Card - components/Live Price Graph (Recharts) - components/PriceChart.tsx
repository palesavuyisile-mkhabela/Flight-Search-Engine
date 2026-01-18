"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useFlightStore } from "@/store/flightStore";

export default function PriceChart() {
  const flights = useFlightStore(s =&gt; s.filtered);

  const data = flights.map((f, i) =&gt; ({
    index: i,
    price: Number(f.price.total),
  }));

  return (
    &lt;ResponsiveContainer width="100%" height={300}&gt;
      &lt;LineChart data={data}&gt;
        &lt;XAxis dataKey="index" /&gt;
        &lt;YAxis /&gt;
        &lt;Tooltip /&gt;
        &lt;Line type="monotone" dataKey="price" /&gt;
      &lt;/LineChart&gt;
    &lt;/ResponsiveContainer&gt;
  );
}
