import mongoose from "mongoose";
import Piece from "./models/piece.js";

const pieces = [
  {
    id: 1,
    description: "Beautiful 18k gold necklace",
    imageURL: "https://i.ibb.co/L0X2JfR/ID001.jpg",
    price: 1000.0, //opt
    sold: false,
    category: "Necklace",
    metal: "18k Gold",
    length: 16.5, //opt
    appraisal: false,
    instaURL: "https://www.instagram.com/p/B6OrGQtHkf9/", //opt
  },
  {
    id: 2,
    description:
      "Sophisticated necklace with navy blue stones and genuine pearl pendant",
    imageURL: "https://i.ibb.co/0Jh33b2/ID002.jpg",
    price: 1000.0, //opt
    sold: true,
    buyer: "Random Buyer", //opt
    category: "Necklace",
    metal: "18k Gold",
    stone: "Pearl", //opt
    length: 18.3, //opt
    weight: 7.1,
    appraisal: false,
    notes: "Random note for test purposes here", //opt
    instaURL: "https://www.instagram.com/p/B6OsF1En5H0/", //opt
  },
  {
    id: 3,
    description: "Unique 18k gold necklace with black stones and Cz",
    imageURL: "https://i.ibb.co/233L0dj/ID003.png",
  },
  {
    id: 4,
    description: "18k gold necklace with turquoise stones",
    imageURL: "https://i.ibb.co/m9Dk4F2/ID004.jpg",
  },
  {
    id: 5,
    description:
      "Beautiful 18k gold necklace with deep blue and white crystals",
    imageURL: "https://i.ibb.co/xzm8kwC/ID005.jpg",
  },
  {
    id: 6,
    description:
      'Gorgeous 18k gold "Cleopatra" collar necklace with unique hanging adornments',
    imageURL: "https://i.ibb.co/LSQZ77N/ID006.jpg",
  },
  {
    id: 7,
    description: "18k gold necklace with black stones and red accent stones",
    imageURL: "https://i.ibb.co/Zx5jXX7/ID007.jpg",
  },
  {
    id: 8,
    description: "Beautiful rosary-style necklace with natural black stones",
    imageURL: "https://i.ibb.co/84sJQVh/ID008.jpg",
  },
  {
    id: 9,
    description: "Stunning 18k gold necklace with garnet accent stones",
    imageURL: "https://i.ibb.co/KGZGFRj/ID009.jpg",
  },
];

mongoose.connect("mongodb://localhost/pieces");

pieces.map((data) => {
  const piece = new Piece(data);
  piece.save();
});
