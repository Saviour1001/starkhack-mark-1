import { writeFileSync } from "fs";

const API_KEY = "69d18af4-5482-4eef-8430-41f159cb9c03";

const api_url = "https://api.herodotus.cloud";

let functionName = ["batch-queries"];

let headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  apiKey: API_KEY,
};

let response = await fetch(
  `https://api.herodotus.cloud/${functionName[0]}?apiKey=${API_KEY}`,
  {
    method: "GET",
    headers: headersList,
  }
);

let data = await response.text();
console.log(data);

writeFileSync(`${functionName[0]}.json`, JSON.stringify(data));
