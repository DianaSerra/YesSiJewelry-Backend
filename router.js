import express from "express";
import { all_pieces, add_piece } from "./controllers/pieces.js";

const router = express.Router();

router.route("/pieces.json").get(all_pieces);
router.route("/add-piece").post(add_piece);

export default router;
