import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import requestTime from "./middleware/requestTime.js";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import { homePosts } from "./controllers/postController.js";
import { homeUsers } from "./controllers/userController.js";
import { homeComments } from "./controllers/commentController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger);
app.use(requestTime);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get('/test', (req, res) => {
  res.render("user", { title: "Test Title", users: [] });
});

app.get('/', async (req, res) => {
  try {
    const posts = await homePosts();
    const users = await homeUsers();
    const comments = await homeComments();
    res.render("home", { title: "Home", posts, users, comments });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.use("/posts", postRoutes);
app.use("/users", userRoutes);
app.use("/comments", commentRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const logger = require('./middleware/logger');
// const errorHandler = require('./middleware/errorHandler');
// const requestTime = require('./middleware/requestTime');
// const postRoutes = require('./routes/postRoutes');
// const userRoutes = require('./routes/userRoutes');
// const commentRoutes = require('./routes/commentRoutes');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(logger);
// app.use(requestTime);

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/posts', postRoutes);
// app.use('/users', userRoutes);
// app.use('/comments', commentRoutes);

// app.use(errorHandler);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });