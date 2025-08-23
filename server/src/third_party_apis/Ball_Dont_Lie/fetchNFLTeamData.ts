import axios, { AxiosResponse } from "axios";
import { handleErrors } from "./handleErrors";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.BDL_BASE_URL;
const API_KEY = process.env.BDL_API_KEY;

export async function fetchTeams(): Promise<any> {
  const response: AxiosResponse<any, any> = await axios.get(
    `${BASE_URL}/teams`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  if (response.status !== 200) {
    handleErrors(response);
  }

  return response.data;
}
