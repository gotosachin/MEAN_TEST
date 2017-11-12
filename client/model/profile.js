var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
SALT_WORK_FACTOR = 10;
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var profileSchema = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    fburl: {type: String, lowercase: true,required: 'Please enter fb url'},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    enable: {type: Boolean, default: true},
    is_deleted: {type: Boolean, default: false},
    createdDate:{type:Date, default: Date.now},
    modifiedDate: {type: Date, default: Date.now}
});

var profileObj = mongoose.model('profile', profileSchema);
module.exports = profileObj;