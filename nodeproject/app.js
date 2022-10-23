// Require express and create an instance of it
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true}));


// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});
//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));
// On localhost:3000/welcome

app.get('/get', function (req, res) {
	console.log(req.query);
    res.send({status: 200});
});

app.post('/post', function (req, res) {
	let login = req.body.login;
    let password = req.body.password;
    
    if(login === 'admin' && password === 'qwerty12345') {
    res.json({sttus:200})
    } else (){
        res.json({status:404})
    }
});


// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
