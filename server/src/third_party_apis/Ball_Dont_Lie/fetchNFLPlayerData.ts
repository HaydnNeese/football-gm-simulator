import { next } from './../../../node_modules/effect/src/Cron';
import axios, { AxiosResponse } from "axios";
import { BDLPlayer } from "./models/bdl_player";
import { handleErrors } from "./handleErrors";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.BDL_BASE_URL;
const API_KEY = process.env.BDL_API_KEY;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchAllPlayers(): Promise<any> {
  const url = `${BASE_URL}/players/active?per_page=100`;
  let allPlayers: BDLPlayer[] = [];
  let nextCursor: string | null = null;

  do {
    const urlWithCursor: string = nextCursor
      ? `${url}&cursor=${nextCursor}`
      : `${url}`;

    let success = false;
    let retries = 0;

    let response: AxiosResponse<any, any>;
    let data: any;
    let meta: any;


    while (!success) {
      try {
        response = await axios.get(urlWithCursor, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });

        if (response.status !== 200) {
          handleErrors(response);
        }

        data = response.data.data;
        meta = response.data.meta;

        success = true;
        retries = 0; // reset retries on success
      } catch (error: any) {
        if (error.response?.status === 429) {
          retries++;

          if (retries > 0) {
            console.warn(`Rate limit hit. Waiting 61 seconds before retrying...`);
            await sleep(61000);
          } else {
            console.warn(`Rate limit hit. Waiting 5 seconds for API to reset before retrying...`);
            await sleep(5000);
          }
        } else {
          console.error(`Error fetching URL ${url}:`, error.message);
          throw error;
        }
      }
    }

    allPlayers.push(...data);
    nextCursor = meta.next_cursor ? meta.next_cursor.toString() : null;
    console.log(`Fetched ${data.length} players, cursor: ${nextCursor}, total so far: ${allPlayers.length + data.length}`);
  } while (nextCursor);

  return allPlayers;
}
