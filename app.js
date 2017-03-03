var express = require('express');
var app = express();
//var bodyParcer = require ('bodyParcer');
var mongoose = require ('mongoose');

var configDB = require('./config/database.js')
// var url ='mongodb://user12:user12@ds035006.mlab.com:35006/healthapp2017'

var db = mongoose.connect (configDB.url);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/api', function(request, response) {
  response.render('pages/api');
});

app.get('/beverages',function(request, response){
	 var user_id = request.param('id');
	 
	 if("Corona"==user_id){
	 	response.status(200);
		response.json({"Corona":[
     {"snackName":"snack1", "detail":"snack deatil info"},
    {"snackName":"snack2", "detail":"snack deatil info"},
    {"snackName":"snack3", "detail":"snack deatil info"}
			]});
}else{
 response.status(204);
 response.json({
	"msg": "No Record Found"
});
}


});









app.listen(app.get('port'), function() {
  console.log('Chakhna app is running on port', app.get('port'));
});


