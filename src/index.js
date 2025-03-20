const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");

const PORT = process.env.PORT || 8000;

dbConnect();

const app = express();

// Middleware

app.use(express.json());

// Routes

// Start the server

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
