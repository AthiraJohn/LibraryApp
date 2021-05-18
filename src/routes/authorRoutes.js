const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');
const bodyParser = require('body-parser');

function routers(navv) {
    //var authors = [
    //    {
    //        title: 'Tom and Jerry',
    //        author: 'Joseph Barbera',
    //        genre: 'Italian',
    //        img: "author1.jpg"
    //    },
    //    {
    //        title: 'Harry Potter',
    //        author: 'J k Rowling',
    //        genre: 'British',
    //        img: "author2.jpg"
    //    },
    //    {
    //        title: 'Paathumayude aadu',
    //        author: 'Vaikom Muhammad Basheer',
    //        genre: 'Indian',
    //        img: "author3.jpg"
    //    },
    //    {
    //        title: 'The Girl on the Train',
    //        author: 'Paula Hawkins',
    //        genre: 'British',
    //       img: "author4.jpg"
    //    }
    //]

    authorsRouter.use(bodyParser.urlencoded({ extended: true }));

    authorsRouter.get('/', function (req, res) {
        Authordata.find()
            .then(function (authors) {
                res.render("authors", {
                    navv,
                    title: 'Library',
                    authors
                });
            });
    });

    authorsRouter.get('/:id', function (req, res) {
        const id = req.params.id
        Authordata.findOne({ _id: id })
            .then(function (author) {
                res.render('author', {
                    navv,
                    title: 'Library',
                    author
                });
            });

    });

    authorsRouter.get('/delete/:id', function (req, res) {
        const id = req.params.id
        Authordata.deleteOne({ _id: id })
            .then(function () {
                res.redirect('/authors');
            });
    });

    authorsRouter.get('/updateauthor/:id', function (req, res) {
        const id = req.params.id
        Authordata.findOne({ _id: id })
            .then(function (author) {
                res.render("updateauthor", {
                    navv,
                    title: 'Library',
                    author
                });
            });
    });

    authorsRouter.post('/updateauthor/:id/submit', function (req, res) {
        const item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            description: req.body.description,
            image: req.body.image
        }
        const id = req.params.id
        Authordata.updateOne({ _id:id}, item)
            .then(function () {
                res.redirect('/authors');
            });
        });

    return authorsRouter;

}

module.exports = routers;