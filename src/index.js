const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 8000

const app = express();

// Middleware

app.use(express.json());

// Routes

// Start the server

app.listen(PORT, ()=>{
    console.log(`Server is listening at port ${PORT}`);
})