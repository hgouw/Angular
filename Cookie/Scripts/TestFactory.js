/// <reference path="angular.js" />
/// <reference path="angular-cookies.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope, Factory) {
    Factory.cookieReader()
    .then(function (response) {
        $scope.factoryAuth = response.data.auth;
        Factory.apiSearch($scope.factoryAuth)
        .then(function (response) {
            $scope.factoryApi = JSON.stringify(response.data, undefined, 2);
        });
    });
});