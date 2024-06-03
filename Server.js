const express = require("express");
const mongoose = require("mongoose");
const routes= require("./routes/ToDoRoute")
const cors= require('cors')
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 7000;
app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });
app.use(routes)

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});