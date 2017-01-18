/// <reference path="angular.js" />

var app = angular.module("myModule", ["ngRoute"])
                 .config(function ($routeProvider, $locationProvider) {
                     $routeProvider
                        .when("/home", {
                            templateUrl: "Templates/Home.html",
                            controller: "homeController"
                        })
                        .when("/courses", {
                            templateUrl: "Templates/Courses.html",
                            controller: "coursesController"
                        })
                        .when("/students", {
                            templateUrl: "Templates/Students.html",
                            controller: "studentsController"
                        })
                        .otherwise({
                            redirectTo: "/home"
                        });
                     $locationProvider.html5Mode(true);
                 })
                 .controller("homeController", function ($scope) {
                     $scope.message = "Home Page";
                 })
                 .controller("coursesController", function ($scope) {
                     $scope.courses = ["C#", ".NET", "LINQ", "Entity Framework", "SQL Server", "Azure"];;
                 })
                 .controller("studentsController", function ($scope) {
                     $scope.students = ["Fergus", "Goran", "Herman", "Michael"];
                 });