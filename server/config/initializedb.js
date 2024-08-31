const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const mongoose = require('mongoose');
const connectDB = require('./db');
const Post = require('../models/Post');

const initializeDB = async () => {
    try {

        await connectDB();

        await Post.deleteMany();

        await Post.insertMany([
            { title: "Deployment of Node.js applications", body: "Understand the different ways to deploy your Node.js applications, including on-premises, cloud, and container environments..." },
            { title: "Building APIs with Node.js", body: "Learn how to use Node.js to build RESTful APIs using frameworks like Express.js" },
            { title: "Build real-time, event-driven applications in Node.js", body: "Socket.io: Learn how to use Socket.io to build real-time, event-driven applications in Node.js." },
            { title: "Authentication and Authorization in Node.js", body: "Learn how to add authentication and authorization to your Node.js web applications using Passport.js or other authentication libraries." },
            { title: "Discover how to use Express.js", body: "Discover how to use Express.js, a popular Node.js web framework, to build web applications." },
            { title: "Asynchronous Programming with Node.js", body: "Asynchronous Programming with Node.js: Explore the asynchronous nature of Node.js and how it allows for non-blocking I/O operations." },
            { title: "Understand how to work with MongoDB and Mongoose", body: "Understand how to work with MongoDB and Mongoose, an Object Data Modeling (ODM) library, in Node.js applications." },
            { title: "Learn the basics of Node.js and its architecture", body: "Learn the basics of Node.js and its architecture, how it works, and why it is popular among developers." },
            { title: "Learn Morgan - HTTP Request logger for NodeJs", body: "Learn Morgan." },
            { title: "NodeJs Limiting Network Traffic", body: "Learn how to limit network traffic." },
            { title: "Building Progressive Web Apps (PWAs)", body: "Enhancing user experience with offline capabilities." }
        ]);

        console.log('Database initialized with dummy blog posts');

    }

    catch (error) {
        console.error(`Database error: ${error}`);
    }

    finally {
        await mongoose.connection.close();
    };
};

initializeDB();