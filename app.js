const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("view", path.join(__dirname, "views"));

// mongoose.connect("mongodb://localhost:27017/blog-platform", {
//     useNewURLParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log("MongoDB connected")).catch(err => console.err(err));

app.get("/", (req, res) => {
    res.send("Welcome to SBA5");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something's wrong!");
});

const PORT = /*process.env.PORT || */3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})