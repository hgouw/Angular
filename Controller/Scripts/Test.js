/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    $scope.message = "AngularJS Tutorial";

    var employee = {
        firstName: 'Herman',
        lastName: 'Gouw',
        gender: 'Male'
    };
    $scope.employee = employee;
});

// The long form:
//var myController = function ($scope) {
//    $scope.message = "AngularJS Tutorial";
//};
//myApp.controller("myController", myController);