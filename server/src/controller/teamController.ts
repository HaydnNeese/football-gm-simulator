import { Request, Response } from "express";
import prisma from "../prisma/client";
import { PlayerPositionEnum } from "@prisma/client";
import { validateOrder, validatePlayerSort, validateTeamSort } from "../utils/validators";

// GET all teams
export const getAllTeams = async (req: Request, res: Response) => {
  const { sortBy, order } = req.query;

  const sortField = validateTeamSort(String(sortBy));
  const sortOrder = validateOrder(String(order));
  try {
    console.log("Fetching all teams");
    const teams = await prisma.team.findMany({
      orderBy: { [sortField]: sortOrder },
    });
    res.json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch teams" });
  }
};

// GET one team by ID
export const getTeamById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    console.log(`Fetching team with ID: ${id}`);
    const team = await prisma.team.findUnique({
      where: { id }
    });

    if (!team) {
      console.log(`Team with ID: ${id} not found`);
      return res.status(404).json({ error: "Team not found" });
    }

    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch team" });
  }
};
  // // Validate order
// GET all players for a specific team using Prisma relation
export const getTeamRoster = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { position, sortBy, order } = req.query;

  const sortField = validatePlayerSort(String(sortBy));
  const sortOrder = validateOrder(String(order));

  try {
    const teamWithPlayers = await prisma.team.findUnique({
      where: { id },
      include: {
          players: {
            where: position ? { position: position as PlayerPositionEnum } : undefined,
            orderBy: { [sortField]: sortOrder },
          },
      }
    });

    if (!teamWithPlayers) {
      return res.status(404).json({ error: "Team not found" });
    }

    res.json(teamWithPlayers.players);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch players for team" });
  }
};


