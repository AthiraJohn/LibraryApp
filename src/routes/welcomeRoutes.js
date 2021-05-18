const express =  require('express');
const welcomeRouter = express.Router();

function router(navv){
    welcomeRouter.get('/',function(req,res){
       
            res.render("welcome",
        {
            navv,
             title: 'Library'
            });

        });

    return welcomeRouter;

}


module.exports = router;