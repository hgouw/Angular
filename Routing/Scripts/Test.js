/// <reference path="angular.min.js" />
/// <reference path="angular-route.min.js" />

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
                        .when("/students/:id", {
                            templateUrl: "Templates/StudentDetails.html",
                            controller: "studentDetailsController"
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
                     $scope.students = [
                        { id: 1, name: "Fergus" },
                        { id: 2, name: "Goran" },
                        { id: 3, name: "Herman" },
                        { id: 4, name: "Michael" }
                     ];
                 })
                 .controller("studentDetailsController", function ($scope) {
                     $scope.student = [
                        { id: 3, name: "Herman" }
                     ];
                 });