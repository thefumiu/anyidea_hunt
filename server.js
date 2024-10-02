const express = require("express");
const PORT = 8083;

const app = express();
// Middleware to parse JSON
app.use(express.json());
app.use(express.static("files"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
});