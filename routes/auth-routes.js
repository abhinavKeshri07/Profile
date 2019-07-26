const route = require('express').Router();
//auth login 
route.get('/login',function(req, res){ // this controller function can be put into controllers folder
	res.render('login');
});

//auto with google
route.get('/google', function(req, res){
	//handle with passport
	res.send('loggin in with google');
});

//auth logout
route.get('/logout', function(req,res){
	//hadle with passport
	res.send('Logging out');
});

module.exports = route;