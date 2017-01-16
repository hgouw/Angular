/// <reference path="angular.min.js" />

// Method chaining mechanism
var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    $scope.message = "AngularJS Tutorial";
                    var employee = {
                        firstName: 'Herman',
                        lastName: 'Gouw',
                        gender: 'Male'
                    };
                    $scope.employee = employee;
                });

//var myApp = angular.module("myModule", []);

// Combining controller assignment and creation
//myApp.controller("myController", function ($scope) {
//    $scope.message = "AngularJS Tutorial";
//    var employee = {
//        firstName: 'Herman',
//        lastName: 'Gouw',
//        gender: 'Male'
//    };
//    $scope.employee = employee;
//});

// The long form:
//var myController = function ($scope) {
//    $scope.message = "AngularJS Tutorial";
//};
//myApp.controller("myController", myController);