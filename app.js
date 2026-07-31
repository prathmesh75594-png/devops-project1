const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>🚀 Welcome to Prathmesh's DevOps Project 1</h1><p>Running on Node.js + Express</p>");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
