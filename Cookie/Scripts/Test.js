/// <reference path="angular.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope, $q, Service) {
    Service.cookieReader()
    .then(
        function (result) {
            $scope.data = result.auth;
        },
        function (error) {
            $scope.data = error.statusText;
        }
   );
});