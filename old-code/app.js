/*
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var routes = require('./routes/index');
var users = require('./routes/users');
var session = require("express-session");

var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;
var BasicStrategy = require('passport-http').BasicStrategy;

var userObj = require('./app/model/user.js');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

app.use('/', routes);
//app.use('/users', users);
require('./routes/users.js')(app, express, passport);

// html Engine Setup+
/*
app.engine('html', function (path, opt, fn) {
    fs.readFile(path, 'utf-8', function (err, str) {
        if (err)
            return str;
        return fn(null, str);
    });
});
*/
/*
mongoose.connect('mongodb://localhost:27017/testApp');

app.get('/', function(req, res) {
    res.render('index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


// 21/07/2017
//frontend user login

passport.use('userLogin', new LocalStrategy(function(username, password, done) {
    console.log(username + password);
    userObj.findOne({ 'email': username }, function(err, adminuser) {
        if (err) {
            return done(err);
        }
        if (!adminuser) {
            //console.log("in adminuser");
            return done(null, false);
        }
        bcrypt.compare(password, adminuser.password, function(err, res) {
            if (res == false) {
                return done(null, false);
            } else {

                //console.log(adminuser);return;
                return done(null, { id: adminuser });
            }
        });
    });
}));
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    userObj.findById(id, function(err, user) {
        done(err, user);
    });
});



module.exports = app; 
*/

(function() {
    'use strict';

    angular.module('app', [
            "ui.router"
        ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider.state("users", {
                url: "/",
                templateUrl: "/views/user/index.html",
                controller: "userController"
            }).state("create", {
                url: "/create",
                templateUrl: "/views/user/create.html",
                controller: "userController"
            }).state("edit", {
                url: "/edit/:id",
                templateUrl: "/views/user/create.html",
                controller: "userController"
            }).state("details", {
                url: "/details/:id",
                templateUrl: "/views/user/details.html",
                controller: "userController"
            });
        })
        .constant("globalConfig", {
            apiAddress: 'http://localhost:3111/api'
        });
})();