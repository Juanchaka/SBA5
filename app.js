const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const isAuthenticated = require('./middleware/auth');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');
const Post = require("./models/Post");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger);


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// mongoose.connect("mongodb://localhost:27017/blog-platform").then(() => console.log("MongoDB connected")).catch(err => console.error(err));

// // app.get("/", (req, res) => {
// //     res.send("Welcome to SBA5");
// // });
app.get('/', async (req, res) => {
    try {
      const posts = await Post.find().populate('author', 'username').exec();
      res.render('index', { title: 'Home', posts });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });


app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/comments', commentRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});