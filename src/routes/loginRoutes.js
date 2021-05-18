const express = require('express');
const loginRouter = express.Router();
const Userdata=require('../model/userdata');
let mssg = "";

function routerrss(navss) {

    loginRouter.get('/', function (req, res) {
        res.render("login",
            {
                navss,
                title: 'Library',

            });
    });
    loginRouter.get('/',function(req,res){
        const id = req.params.id
        res.render("welcome",{
            navss:[{link:'/books',name:'Books'},
            {link:'/authors',name:'Authors'},
            {link:'/addbook',name:'Addbook'},
            {link:'/addauthor',name:'Addauthor'},
            {link:'/',name:'Logout'}],
            title: 'Library'
        });
    });

    loginRouter.post("/welcome",function(req,res){
        var email = req.body.email;
        var password = req.body.password;

        Userdata.findOne({ email : email,password:password},function(err,user){
            if(err)
            {
                console.log("err") ;
                
            }
            else if (!user)
            {
                    mssg = "Wrong credentials!! Create an account if you are new"
                    res.redirect("/login/loginmsg");  
            }
            else
            {
                res.redirect("/welcome");  
            }
            
        })
    });

    loginRouter.get("/loginmsg",function(req,res){
        res.render("loginmsg",{
            navss,
            title:'Library',
            mssg
        });
    });

return loginRouter;

    }

module.exports = routerrss;