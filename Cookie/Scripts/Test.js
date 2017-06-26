/// <reference path="angular.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope, $q, Factory) {
    //Service.cookieReader()
    //.then(
    //    function (result) {
    //        $scope.data = result.auth;
    //    },
    //    function (error) {
    //        $scope.data = error.statusText;
    //    }
    //);

    Factory.cookieReader()
    .then(function (response) {
        $scope.data = response.data;//.auth;
    });
});