import express, { Request, Response } from "express";
const router = express.Router();

// placeholder for nfl team data
// @desc Test route for teams
// @route GET /api/teams
router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Team routes are now working" });
});

export default router;
