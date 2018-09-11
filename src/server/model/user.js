var mongoose = require('mongoose');
var mongooseAutoIncrement = require('mongoose-auto-increment');
var bcrypt = require('bcrypt-nodejs');


var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String, index: { unique: true } },
    password: { type: String, required: true },
    create_date: { type: Date, default: Date.now },
    intents: {type: array, },
    entities: []
})

// crypt password when saving
userSchema.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // var hash = CryptoJS.MD5(user.password);

    bcrypt.hash(user.password, null, null, function (err, hash) {
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password);
};

mongooseAutoIncrement.initialize(mongoose.connection);

userSchema.plugin(mongooseAutoIncrement.plugin, {
    model: 'user',
    field: 'fieldID',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('User', userSchema);