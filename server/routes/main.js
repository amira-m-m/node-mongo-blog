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

        //const data = await Post.find();

        // Pagination
        const perPage = 4;
        const page = req.query.page || 1;
        const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec();

        const count = await Post.countDocuments();
        
        const totalPages = Math.ceil(count / perPage);
        const nextPage = parseInt(page) + 1;
        const hasNextPage = nextPage <= totalPages;
        const prevPage = parseInt(page) - 1;
        const hasPrevPage = prevPage > 0;

        res.render('index', { 
            locals,
            data,
            current: page,
            totalPages: totalPages,
            nextPage: hasNextPage ? nextPage : null,
            prevPage: hasPrevPage ? prevPage : null,
            currentRoute: '/' });
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