const express = require("express");

// SETUP - global variables
const PORT = 8083;

// SETUP - express
const app = express();
app.use(express.json());
app.use(express.static("files"));
app.set('view engine', 'ejs');

// METHODS
app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/target", (req, res) => {
    res.render("target.ejs");
});

// LAUNCH
app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
});