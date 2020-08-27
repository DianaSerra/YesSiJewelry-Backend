import Piece from "../models/piece.js";
import e from "express";
export const all_pieces = (req, res) => {
  Piece.find()
    .sort({ id: "asc" })
    .lean()
    .exec(function (err, pieces) {
      return res.send(JSON.stringify(pieces));
    });
};

export const add_piece = (req, res, next) => {
  const new_piece_id = Piece.find()
    .sort({ id: "desc" })
    .lean()
    .exec(function (err, pieces) {
      consnole.log(pieces[0]);
      return pieces[0];
    });

  console.log(new_piece_id);

  var newPiece = new Piece({
    id: new_piece_id,
    description: req.body.description,
    price: req.body.price,
    sold: req.body.sold || false,
    buyer: req.body.buyer || "",
    category: req.body.category || "",
    metal: req.body.metal || "",
    stone: req.body.stone || "",
    length: req.body.length || 0,
    weight: req.body.weight || 0,
    appraisal: req.body.appraisal || false,
    notes: req.body.notes || "",
    instaURL: req.body.instaURL || "",
    fbURL: req.body.fbURL || "",
  });

  Piece.create(newPiece, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      //TODO: change this to the "edit item" route at some point
      res.redirect("/pieces.json");
    }
  });
};
