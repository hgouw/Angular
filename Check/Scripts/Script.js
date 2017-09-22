/// <reference path="angular.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    $scope.init = function () {
                        $scope.flag = true;
                    };
                    $scope.toggle = function () {
                        $scope.flag = !filter;
                    };
                });