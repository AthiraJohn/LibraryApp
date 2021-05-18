const express = require('express');
const signupRouter = express.Router();
const Userdata = require('../model/userdata');

function routerss(navs) {

    signupRouter.get('/', function (req, res) {
        res.render("signup",
            {
                navs,
                title: 'Library',

            });
    });


    signupRouter.get('/', function (req, res) {
        const id = req.params.id
        res.render("welcome", {
            navss: [{ link: '/books', name: 'Books' },
            { link: '/authors', name: 'Authors' },
            { link: '/addbook', name: 'Addbook' },
            { link: '/', name: 'Logout' }],
            title: 'Library',

        });
    });

    signupRouter.post('/submit', (req, res) => {
        var item = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            password2: req.body.password2,

        }
        var user = Userdata(item);
        user.save();
        res.redirect('/login');

    });

    return signupRouter;

}


module.exports = routerss;