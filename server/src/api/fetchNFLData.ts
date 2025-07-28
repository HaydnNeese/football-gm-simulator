import axios from "axios";

const API_KEY = process.env.BALL_DONT_LIE_API_KEY;
const BASE_URL = "https://www.balldontlie.io/api/v1";

export async function fetchPlayers(): Promise<any> {
    const response = await axios.get(`${BASE_URL}/players`, {
        headers: {
            Authorization: `${API_KEY}`
        }
    });

    if (response.status !== 200) {
        throw new Error(`Error fetching players: ${response.statusText}`);
    }

    return response.data;
}

export async function fetchTeams(): Promise<any> {
    const response = await axios.get(`${BASE_URL}/teams`, {
        headers: {
            Authorization: `${API_KEY}`
        }
    });

    if (response.status !== 200) {
        throw new Error(`Error fetching teams: ${response.statusText}`);
    }

    return response.data;
}