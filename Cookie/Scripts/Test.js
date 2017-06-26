/// <reference path="angular.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope, $q, AuthService) {
    AuthService.cookieReader()
    .then(
        function (result) {
            $scope.data = result.auth;
        },
        function (error) {
            $scope.data = error.statusText;
        }
   );
});