BlogPost Application
Overview

The BlogPost application is a simple web app built with Express.js, EJS, and a RESTful architecture. It allows users to manage blog posts, comments, and users. The application features CRUD operations and utilizes custom middleware for request logging, request timing, and error handling.
Features

    Posts: Create, read, update, and delete blog posts.
    Comments: Add, view, update, and remove comments on posts.
    Users: Manage user accounts with CRUD operations.
    Custom Middleware: Includes logging, request timing, and error-handling middleware.
    Template Engine: Uses EJS for rendering dynamic views.
    Local Database: Uses lowdb for local file-based storage.

Setup
Prerequisites

    Node.js and npm installed on your machine.

Installation

    Clone the repository:

    bash

git clone https://github.com/yourusername/blogpost-app.git

Navigate into the project directory:

bash

cd blogpost-app

Install dependencies:

bash

    npm install

    Create a .env file in the root directory and configure your environment variables if necessary.

Running the Application

Start the server:

bash

npm start

The application will be available at http://localhost:3000.
Usage

    Homepage: Displays a list of blog posts, users, and comments.
    Posts: Navigate to /posts to view all posts. Create new posts at /posts/create.
    Comments: Manage comments at /comments. Create new comments at /comments/create.
    Users: Manage users at /users. Create new users at /users/create.

Middleware

    Logger: Logs request details to the console.
    Request Time: Adds a timestamp to the request object.
    Error Handler: Catches and handles errors.

Database

This application uses lowdb for local file-based storage. The database is stored in db.json, located in the root directory. lowdb provides a simple way to manage JSON files for small-scale applications.