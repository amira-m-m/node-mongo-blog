# Simple Blog

## Introduction

This simple blog app was adapted from a technology tutorial created by [Net Ninja](https://netninja.dev/). It is coded using Node.js and Express JS, and presents data stored in a MongoDB database. A dynamic page routing system is used to construct URLs and render the data of individual blog posts.

## Features

- A landing page that dynamically renders a list of blog posts.
- Blog post list pagination, including current page number and conditionally visible links for viewing older or newer posts.
- Dynamically rendered URLs and contents for individual blog posts.
- Keyword search functionality.

## Instructions

### Set up a new database

- Create a new MongoDB database and collection named `test` and `posts` respectively.
- Create a user with read-write permissions and obtain connection string.

### Set up project locally

- Clone the project to your local system.
- Use a terminal to navigate to the project root folder.
- Run `npm install` to install dependencies.

### Initialize data in database

- Create a `.env` file in the root folder.
- Paste `MONGODB_URI=<CONNECTIONSTRING>` into `.env`, replacing `<CONNECTIONSTRING>` with your MongoDB user's connection string.
- Use a terminal to navigate to `server/config`.
- Run `node initializedb.js` to initialize the database with dummy blog posts.

### Run project

- Use a terminal to navigate to the project root folder.
- Run node `app.js` to initialize a local server.
- Open [localhost:5000](localhost:5000).

## Credits

- Hero image (index page) by [Christin Hume](https://unsplash.com/@christinhumephoto)
- Portrait image (about page) by [Stefan Stefancik](https://unsplash.com/@cikstefan)
