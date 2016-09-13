module.exports = (() => {

    var mongoose = require('./../db/db').mongoose;

    var schema = {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true }
    };
    var collectionName = 'users';
    var usersSchema = mongoose.Schema(schema);
    var Users = mongoose.model(collectionName, usersSchema);
    return Users;
})();