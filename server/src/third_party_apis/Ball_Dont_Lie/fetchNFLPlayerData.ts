import axios, { AxiosResponse } from "axios";
import { BDLPlayer } from "./models/bdl_player";
import { handleErrors } from "./handleErrors";

export async function fetchAllPlayers(): Promise<any> {
  let allPlayers: BDLPlayer[] = [];
  let nextCursor: string | null = null;

  do {
    const url: string = nextCursor
      ? `${BASE_URL}/players?per_page=${PER_PAGE}&page=${nextCursor}`
      : `${BASE_URL}/players?per_page=${PER_PAGE}`;

    const response: AxiosResponse<any, any> = await axios.get(url, {
      headers: {
        Authorization: API_KEY,
      },
    });

    if (response.status !== 200) {
      handleErrors(response);
    }
    const data = response.data.data;
    const meta = response.data.meta;

    allPlayers.push(...data);
    nextCursor = meta.next_cursor ? meta.next_cursor.toString() : null;
  } while (nextCursor);

  return allPlayers;
}
