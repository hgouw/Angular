/// <reference path="angular.min.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var employees = [
                        { name: "Peter", gender: 1, salary: 110000.00, suburb: "Balgowlah" },
                        { name: "Scott", gender: 3, salary: 120000.00, suburb: "Middle Dural" },
                        { name: "Tom", gender: 1, salary: 140000.00, suburb: "Ashfield" }
                    ];

                    $scope.employees = employees;
                });