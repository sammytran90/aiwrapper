var UserModel = require('../model/user');

class User {
    constructor() {
    }

    getByUsernameAndPassword(username, password, callback) {
        UserModel.findOne({username: username}).exec().then(function(user) {
            if (user && user.comparePassword(password)) {
                callback(user);
            }
            else callback(null);
        });
    }

    getByUsername(username) {
        var result = UserModel.findOne({username: username}).exec();
        return result;
    }

    getById(id) {
        var result = UserModel.findOne({_id: id}).exec();
        return result;
    }

    insert(user) {
        var model = new UserModel(user);
        return model.save();
    }

    update(id, data) {
        return UserModel.findByIdAndUpdate(id, data);
    }

    deleteAll() {
        return UserModel.deleteMany({}).exec();
    }
}

module.exports = User;