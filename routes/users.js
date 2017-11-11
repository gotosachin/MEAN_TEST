var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

module.exports = function(app, express,passport) {
	console.log('huuuuuu');

    var userObj = require('../app/controller/User/usercontroller.js');
	
	router.post('/saveUser', userObj.saveUser);

	router.get('/listUser',userObj.listUser);
	router.post('/updateUser/',userObj.updateUser);
	//router.post('/updateUser/:userId',userObj.userDetail);
	router.post('/saveProfile',userObj.saveProfile);
	router.get('/listProfile',userObj.listProfile);
	router.post('/saveAddress',userObj.saveAddress);
	router.get('/getSession', userObj.getSession);
	//router.post('/userLogin',userObj.userLogin);
	
	//router.post('/userlogin', passport.authenticate('userLogin',{session:false}), userObj.userlogin);
	
    app.use('/users',router);
};
