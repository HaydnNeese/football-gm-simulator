import axios, { AxiosResponse } from "axios";
import { handleErrors } from "./handleErrors";

export async function fetchTeams(): Promise<any> {
  const response: AxiosResponse<any, any> = await axios.get(
    `${BASE_URL}/teams`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );

  if (response.status !== 200) {
    handleErrors(response);
  }

  return response.data;
}
