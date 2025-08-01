const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://mongo:27017/messages", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Message = mongoose.model("Message", {
  content: String,
});

app.post("/save", async (req, res) => {
  const msg = new Message({ content: req.body.message });
  await msg.save();
  res.send({ status: "saved" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
