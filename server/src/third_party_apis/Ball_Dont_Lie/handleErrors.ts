import { AxiosResponse } from "axios";

export function handleErrors(response: AxiosResponse<any, any>): void {
  switch (response.status) {
    case 400:
      throw new Error("400 Bad Request -- The request is invalid. The request parameters are probably incorrect.");
    case 401:
      throw new Error("401 Unauthorized -- You either need an API key or your account tier does not have access to the endpoint.");
    case 404:
      throw new Error("404 Not Found -- The specified resource could not be found.");
    case 406:
      throw new Error("406 Not Acceptable -- You requested a format that isn't json.");
    case 429:
      throw new Error("429 Too Many Requests -- You're rate limited.");
    case 500:
      throw new Error("500 Internal Server Error -- We had a problem with our server. Try again later.");
    case 503:
      throw new Error("503 Service Unavailable -- We're temporarily offline for maintenance. Please try again later.");
    default:
      throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
  }
}
