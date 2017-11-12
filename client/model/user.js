var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
SALT_WORK_FACTOR = 10;
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;


// sub document schema of address. i.e. multiple address of a user.
var addressSchema = new mongoose.Schema({
    address1: {type: String},
    address2: {type: String},
    city: {type: String, lowercase: true},
    country: {type: String,lowercase: true},
    enable: {type: Boolean, default: true},
    is_deleted: {type: Boolean, default: false},
    createdDate:{type:Date, default: Date.now},
    modifiedDate: {type: Date, default: Date.now}
});

// User schema
var userSchema = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String, lowercase: true, unique: 'Email already exist', required: 'Please enter the email'},
    password: {type: String, select: false, required: 'Please enter the password'},
    enable: {type: Boolean, default: true},
    is_deleted: {type: Boolean, default: false},
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    createdDate:{type:Date, default: Date.now},
    modifiedDate: {type: Date, default: Date.now},
	address:[addressSchema]
});


userSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            user.password = hash;
            next();
        });
    });
});

userSchema.path("email").validate(function (value) {
    var validateExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return validateExpression.test(value);
}, "Please enter valid email address");

var userObj = mongoose.model('users', userSchema);
module.exports = userObj;