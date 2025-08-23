import { Request, Response } from "express";
import prisma from "../prisma/client";

// GET all players
export const getAllPlayers = async (req: Request, res: Response) => {
  try {
    console.log("Fetching all players");
    const players = await prisma.player.findMany();
    res.json(players);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch players" });
  }
};

// GET one player by ID
export const getPlayerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    console.log(`Fetching player with ID: ${id}`);

    const player = await prisma.player.findUnique({
      where: { id },
    });

    if (!player) {
      console.log(`Player with ID: ${id} not found`);
      return res.status(404).json({ error: "Player not found" });
    }

    res.json(player);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch player" });
  }
};
