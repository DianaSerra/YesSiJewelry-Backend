import mongoose from "mongoose";

var pieceSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  description: String,
  imageURL: String,
  price: Number, //opt
  sold: Boolean,
  buyer: String, //opt
  categories: [String],
  metals: [String],
  stones: [String], //opt
  length: Number, //opt
  weight: Number,
  appraisal: Boolean,
  notes: String, //opt
  instaURL: String, //opt
  fbURL: String, //opt
});

export default mongoose.model("Piece", pieceSchema);
