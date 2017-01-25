/// <reference path="angular.js" />

// Promise chaining mechanism
var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope, $timeout) {
                    function add(x, y) {
                        return $timeout(function () {
                            return x + y;
                        }, 10);
                    };

                    var startTime = Date.now();
                    add(5, 1)
                        .then(function (result) {
                            return add(result, 2);
                        })
                        .then(function (result) {
                            return add(result, 3);
                        })
                        //.then(function (result) {
                        //    return Array(result).join('*');
                        //})
                        .then(function (result) {
                            $scope.result = result;
                            $scope.elapsedTime = Date.now() - startTime;
                        });
                });