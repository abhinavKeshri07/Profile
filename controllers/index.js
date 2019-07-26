exports.index = function(req, res, next) {
  res.render('index', { title: 'Express' });// this line is telling to render index.ejs in /views folder
  
}

