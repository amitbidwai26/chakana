var express = require('express');
var app = express();
//var bodyParcer = require ('bodyParcer');
//var mongoose = require ('mongoose');


//var url ='mongodb://user12:user12@ds035006.mlab.com:35006/healthapp2017'
//var db = mongoose.connect (url);

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
response.send("ping");
});









app.listen(app.get('port'), function() {
  console.log('Chakhna app is running on port', app.get('port'));
});


