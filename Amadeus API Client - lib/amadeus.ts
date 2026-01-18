import axios from "axios";

let token: string | null = null;
let tokenExpiry = 0;

async function getAccessToken() {
  if (token &amp;&amp; Date.now() &lt; tokenExpiry) return token;

  const res = await axios.post(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.AMADEUS_CLIENT_ID!,
      client_secret: process.env.AMADEUS_CLIENT_SECRET!,
    }),
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

  token = res.data.access_token;
  tokenExpiry = Date.now() + res.data.expires_in * 1000;
  return token;
}

export async function searchFlights(params: any) {
  const accessToken = await getAccessToken();

  const res = await axios.get(
    "https://test.api.amadeus.com/v2/shopping/flight-offers",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      params,
    }
  );

  return res.data.data;
}
