import restify from 'restify'
import config from "./../config/config.json"

var server = restify.createServer({
    name: config.name
});


server.use(restify.fullResponse());
server.use(restify.bodyParser());
server.use(restify.queryParser());

var routes = require('./routes')(server);



server.listen(config.port, config.host, function() {
    console.log('%s listening at %s ', server.name, server.url);
});