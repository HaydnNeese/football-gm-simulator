import { Player } from "./player";

export interface Agent {
  id?: string;
  firstName: string;
  lastName: string;
  agencyName?: string; // Optional agency name
  reputation?: number; // 0–100, overall reputation rating
  yearsOfExperience?: number; // Number of years in the industry
  clients?: Player[]; // Array of Player objects represented by this agent
}
