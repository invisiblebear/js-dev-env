import express  from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../src/index.html'))
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
