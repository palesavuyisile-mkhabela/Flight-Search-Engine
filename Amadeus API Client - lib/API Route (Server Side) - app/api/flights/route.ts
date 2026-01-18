import { NextResponse } from "next/server";
import { searchFlights } from "@/lib/amadeus";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const data = await searchFlights({
    originLocationCode: searchParams.get("origin"),
    destinationLocationCode: searchParams.get("destination"),
    departureDate: searchParams.get("date"),
    adults: "1",
    currencyCode: "USD",
    max: "50",
  });

  return NextResponse.json(data);
}
