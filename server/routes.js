module.exports = function(app) {
    var users = require('./../controllers/usescontroller');

    app.get('/', function(req, res, next) {
        return res.send("WELCOME TO REST API");
    });

    app.post('/createuser', users.createuser);
    app.get('/getuser', users.getuser);

};