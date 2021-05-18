const express = require('express');
const addAuthorRoutes = express.Router();
const Authordata = require('../model/Authordata');

function router(navv){

    addAuthorRoutes.get('/', function(req,res){
        res.render("addauthor", 
        {
            navv,
            title: 'Library'
        }); 
    });
    
    addAuthorRoutes.post('/add', function(req,res){
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            description: req.body.description,
            image: req.body.image
        }

        var author = Authordata(item);
        author.save();
        res.redirect('/authors');
    });

    return addAuthorRoutes
}

module.exports = router;