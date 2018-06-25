import express  from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.get('/users', function(req, res){
	// hard coded for simplicity. Pretend this hits a real DB

	res.json([
		{"id": 1, "firstName":"Bob", "lastName":"Smith", "email":"bob@bob.com"},
		{"id": 2, "firstName":"Tom", "lastName":"Smithers", "email":"tom@tom.com"},
		{"id": 3, "firstName":"Bill", "lastName":"Smitherine", "email":"bill@bill.com"}
	]);
});

app.listen(port, function(err){
	if(err){
		console.log(err);
	} else{
		open('http://localhost:' + port);
	}
});
