const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 8000;

dbConnect();

const app = express();

// Middleware

app.use(express.json());

// Routes

app.use('/api/auth', authRoutes);

// Start the server

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
