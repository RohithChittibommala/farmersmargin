const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const CORS = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const { connectDB } = require("./models/dbconnection");

// connect to mongodb atlas
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(CORS());

// //getQueries
// app.use("/farms", require("./routes/farm.js"));
// app.use("/fields", require("./routes/field.js"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
