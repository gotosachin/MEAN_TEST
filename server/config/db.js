var mongoose = require('mongoose');
var options = {
    useMongoClient: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
};

// var connection = mongoose.connect('mongodb://localhost:27017/mean_db', options, function(err, db) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Database Connection: Connected!!');
//     }
// });

var connection = mongoose.connect('mongodb://sachinbc:sachinbc@ds155315.mlab.com:55315/bc_sachin', options, function(err, db) {
    if (err) {
        console.log(err);
    } else {
        console.log('Database Connection: Connected!!');
    }
});

module.exports = connection;