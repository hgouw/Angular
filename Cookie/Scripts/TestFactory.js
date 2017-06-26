﻿/// <reference path="angular.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope, $q, Factory) {
    Factory.cookieReader()
    .then(function (response) {
        $scope.factoryAuth = response.data.auth;
    });
});