/// <reference path="angular.min.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var employees = [
                        { name: "Peter", gender: "Male", salary: 110000.00 },
                        { name: "Scott", gender: "Male", salary: 120000.00 },
                        { name: "Tom",   gender: "Male", salary: 140000.00 }
                    ];
                    $scope.employees = employees;
                    $scope.employeeView = "EmployeeTable.html";
                });