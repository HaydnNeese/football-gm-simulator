import express from "express";
import { getAllTeams, getTeamRoster, getTeamById } from "../controller/teamController";

const router = express.Router();

router.get("/", getAllTeams);

router.get("/:id", (req, res, next) => {
  req.params.id = req.params.id.trim();
  next();
}, getTeamById);

router.get("/:id/players", (req, res, next) => {
  req.params.id = req.params.id.trim();
  next();
}, getTeamRoster);

export default router;
