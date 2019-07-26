var express = require('express');
var router = express.Router();
var index = require('../controllers/index');
/* GET home page. */
router.get('/', index.index);

/*
router.route('/something')
	.get(function(){

	})
	.post(function(){

	});// semicolon for last method

router.route('/posts/:id')
	.get(function(req, res){

	})
	.post(function(req,res){

	});
*/
module.exports = router;
