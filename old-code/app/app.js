(function() {
    'use strict';

    angular.module('app', ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
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
    }).constant("globalConfig", {
        apiAddress: 'http://localhost:3111/api'
    });
})();