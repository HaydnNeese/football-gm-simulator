import express, { Request, Response } from "express";
const router = express.Router();

// placeholder for nfl player data
const players: { id: number; name: string; position: string; team: string }[] =
  [
    { id: 1, name: "John Doe", position: "QB", team: "Team A" },
    { id: 2, name: "Jane Smith", position: "WR", team: "Team B" },
    { id: 3, name: "Mike Johnson", position: "RB", team: "Team C" },
  ];

// @desc Test route for players
// @route GET /api/players
router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Player routes are now working" });
});
// @desc get single player by ID
// @route GET /api/players/:id
router.get("/:id", (req: Request, res: Response) => {
  const player = players.find((p) => p.id === parseInt(req.params.id));

  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ message: "Player not found" });
  }
});

// @desc Create a new player
// @route POST /api/players
router.post("/", (req: Request, res: Response) => {
  const { name, position, team } = req.body;

  if (!name || !position || !team) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newPlayer = {
    id: players.length + 1,
    name,
    position,
    team,
  };

  players.push(newPlayer);
  res.status(201).json(newPlayer);
});

// @desc Update a player by ID
// @route PUT /api/players/:id
router.put("/:id", (req: Request, res: Response) => {
  const player = players.find((p) => p.id === parseInt(req.params.id));

  if (!player) {
    return res.status(404).json({ message: "Player not found" });
  }

  const { name, position, team } = req.body;

  if (!name || !position || !team) {
    return res.status(400).json({ message: "All fields are required" });
  }

  player.name = name;
  player.position = position;
  player.team = team;

  res.json(player);
});

// @desc Delete a player by ID
// @route DELETE /api/players/:id
router.delete("/:id", (req: Request, res: Response) => {
  const playerIndex = players.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );

  if (playerIndex === -1) {
    return res.status(404).json({ message: "Player not found" });
  }

  players.splice(playerIndex, 1);
  res.status(204).send();
});

// Export the router to be used in the main app
export default router;
