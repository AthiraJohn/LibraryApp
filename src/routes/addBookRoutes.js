const express = require('express');
const addBookRoutes = express.Router();
const Bookdata = require('../model/Bookdata');

function router(navv){ 

    addBookRoutes.get('/', function(req,res){
        res.render("addbook", 
        {
            navv,
            title: 'Library'
        }); 
    });
    
    addBookRoutes.post('/add',function(req,res){
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            description: req.body.description,
            image: req.body.image
        }

        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
    });

    return addBookRoutes;
}

module.exports = router;