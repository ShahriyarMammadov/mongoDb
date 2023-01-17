const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

dotenv.config();
mongoose.set("strictQuery", false);
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: String, required: true },
  ssd: { type: String, required: true },
  cpu: { type: String, required: true },
});

const Products = mongoose.model("products", userSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/products", (req, res) => {
  Products.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

const port = 8000;

mongoose.connect(
  "mongodb+srv://kananamir:kananamir@cluster0.zssgazx.mongodb.net/AF202",
  { useNewUrlParser: true }
);
app.listen(8000, () => {
  console.log("server is running!!");
});
