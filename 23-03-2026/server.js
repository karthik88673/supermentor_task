const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Home Page");
});

app.get("/about", (req, res) => {
    res.send("This is About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.get("/help", (req, res) => {
    res.send("Help Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});