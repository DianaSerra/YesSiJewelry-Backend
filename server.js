import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./router.js";
import bodyParser from "body-parser";
mongoose.connect("mongodb://localhost/pieces");

//initialize http server
const app = express();

app.use(morgan("combined"));
app.use(express.json());

//Handle/route
app.use("/", router);
//app.get("/all-pieces", all_pieces);

//Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
