var Users = require('./../models/users');


// Creating New user
exports.createuser = (req, res, next) => {
    var name = req.params.name;
    var email = req.params.email;
    var password = req.params.password;

    Users.create({ name: name, email: email, password: password }, function(err, result) {
        if (err) {
            console.log(err);
            return res.send({ 'error': err });
        } else {
            return res.send({ 'result': result, 'status': 'successfully saved' });
        }
    });
};

// Fetching Details of user
exports.getuser = (req, res, next) => {

    Users.find({}, function(err, result) {
        if (err) {
            console.log(err);
            return res.send({ 'error': err });
        } else {
            return res.send({ 'user Details': result });
        }
    });
};