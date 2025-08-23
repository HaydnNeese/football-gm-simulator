import { Request, Response } from "express";
import prisma from "../prisma/client";

// GET all teams
export const getAllTeams = async (req: Request, res: Response) => {
  try {
    console.log("Fetching all teams");
    const teams = await prisma.team.findMany();
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
      where: { id },
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

// GET all players for a specific team using Prisma relation
export const getPlayersByTeamId = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const teamWithPlayers = await prisma.team.findUnique({
      where: { id },
      include: { players: true }
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

