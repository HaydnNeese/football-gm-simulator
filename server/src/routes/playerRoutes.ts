import express from "express";
import { getAllPlayers, getPlayerById } from "../controller/playerController";

const router = express.Router();

router.get("/", getAllPlayers);

router.get("/:id", (req, res, next) => {
  req.params.id = req.params.id.trim();
  next();
}, getPlayerById);

export default router;
