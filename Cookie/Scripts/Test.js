/// <reference path="angular.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope, $q, Factory, Service) {
    Service.cookieReader()
    .then(
        function (result) {
            $scope.serviceAuth = result.auth;
        },
        function (error) {
            $scope.serviceAuth = error.statusText;
        }
    );

    Factory.cookieReader()
    .then(function (response) {
        $scope.factoryAuth = response.data.auth;
    });
});