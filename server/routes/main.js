const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

let locals;

router.get('', async (req, res) => {

    try {
        locals = {
            title: "Node.js Blog",
            description: "A simple blog app"
        };
        const data = await Post.find();
        res.render('index', { locals, data });
    }
    catch (error) {
        console.error(error);
    };
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/post/:id', async (req, res) => {

    try {
        let slug = req.params.id;
        const data = await Post.findById({ _id: slug });
        locals = {
            title: data.title,
            description: "A post within a simple blog app"
        };
        res.render('post', { locals, data, currentRoute: `/posts/${slug}` });
    }
    catch (error) {
        console.error(error);
    };
});

module.exports = router;