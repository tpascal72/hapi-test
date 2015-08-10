var cfg = require('ls-config');
var path = require('path')
var dbInit = require('./store/init');
var basePath = path.resolve(__dirname, "..");
var liveDb  = path.join (basePath, "test.db");
var baseDb = path.join(basePath, "testBase.sqlite");
cfg.config("webPort", 10001);
cfg.config("socketsPort", 10002);
cfg.config("liveDatabase", "../test.db");
cfg.config("baseDatabase", "../testBase.sqlite");

dbInit()
	.then(startHandlers)
	.catch(stopServer);


function startHandlers(){
	console.log('starting web server...');
	require('./server');
	require('./api/loader');
}

function stopServer(error){
	console.error("Failed to create database: " + error);
}


