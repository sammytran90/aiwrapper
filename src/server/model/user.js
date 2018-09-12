var mongoose = require('mongoose');
var mongooseAutoIncrement = require('mongoose-auto-increment');
var bcrypt = require('bcrypt-nodejs');


var Schema = mongoose.Schema;

//define intent data model
var intentSchema = new Schema({
    tittle: String,
    events: [{type: String}],
    phrases: [{type: String}],
    responses:[{type: String}]
})

//define entity data model
var entitySchema = new Schema({
    tittle: String,
    definitions: [{type: String}]
})

//define user data model
var userSchema = new Schema({
    username: { type: String, index: { unique: true } },
    password: { type: String, required: true },
    create_date: { type: Date, default: Date.now },
    intents: [intentSchema],
    entities: [entitySchema]
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
    startAt: 1000000000000,
    incrementBy: 1
});

module.exports = mongoose.model('User', userSchema);