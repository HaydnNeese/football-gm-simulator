import express from "express";
import { getAllTeams, getPlayersByTeamId, getTeamById } from "../controller/teamController";

const router = express.Router();

router.get("/", getAllTeams);
router.get("/:id", getTeamById);
router.get("/:id/players", (req, res, next) => {
  req.params.id = req.params.id.trim();
  next();
}, getPlayersByTeamId);

export default router;
