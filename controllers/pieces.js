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

export const add_piece = async (req, res, next) => {
  //Gets id of last piece and adds one to make sure ID is unique
  Piece.find({})
    .sort({ id: "desc" })
    .limit(1)
    .then(function (doc) {
      const newPieceId = doc[0].id + 1;
      var newPiece = new Piece({
        id: newPieceId,
        description: req.body.description,
        price: req.body.price,
        sold: req.body.sold || false,
        buyer: req.body.buyer || "",
        categories: req.body.categories || [],
        metals: req.body.metals || [],
        stones: req.body.stones || [],
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
          res.send(JSON.stringify(newPiece));
        }
      });
    });
};
