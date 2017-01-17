/// <reference path="angular.min.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var employees = [
                        { name: "Peter", dateOfBirth: new Date("January 1, 1960"), gender: "Male", salary: 110000.00 },
                        { name: "Scott", dateOfBirth: new Date("January 1, 1980"), gender: "Male", salary: 120000.00 },
                        { name: "Tom", dateOfBirth: new Date("January 1, 1970"), gender: "Male", salary: 140000.00 }
                    ];
                    $scope.employees = employees;
                    $scope.sortColumn = "name";
                });