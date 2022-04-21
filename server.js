const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const connectDB = require("./database/connection");
const cors = require("cors");

app.set("view engine", "ejs");
app.use(morgan("tiny"));
app.use(cors());
//mongoDB connection
connectDB();
// to barse body of req -> express has estrnalized this middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// necessary to read static files
app.use(express.static(__dirname + "/public"));
// path to use module imported from dotenv in node modules
dotenv.config({ path: "config.env" });

const NODE_PORT = process.env.NODE_PORT || 8080;

//load routers
app.use("/", require("./routes/router"));

app.listen(NODE_PORT, () => `server running on localhost:${NODE_PORT}`);
