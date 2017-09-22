/// <reference path="angular.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    $scope.init = function () {
                        alert("init");
                        $scope.flag = true;
                    };
                    $scope.toggle = function () {
                        alert("toggle");
                        $scope.flag = !filter;
                    };
                });

