# js-dev-env
JavaScript Development Environment


	- install Node.js
	- cd to root of project and use npm install in console. 

	- install Node Security Platform (https://github.com/nodesecurity/nsp)
		- used to check npm packages for security issues. 
		- nsp check in console

	- srcServer.js
	configures a web server to serve up files in source directory

	in console run to open dev server:
		npm start


	For sharing local environment install Localtunnel
		npm install localtunner -g
		lt --port 3000 --subdomain <whatever>

	TRANSPILER: Babel
	BUNDLER : webpack

	UNIT TESTING
	framework: mocha
	Assertion Library: Chai
	Helper Library: JSDOM
	Running Test in Node
	Place test alongside code to be tested
	Tests are run on save 

