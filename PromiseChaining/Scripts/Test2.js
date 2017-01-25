/// <reference path="angular.js" />

// Promise chaining mechanism
var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($q, $scope) {
                    function add(x, y) {
                        var q = $q.defer();

                        setTimeout(function () {
                            var result = x + y;
                            if (result >= 0) {
                                q.resolve(x + y);
                            } else {
                                q.reject('negative value ' + result);
                            }
                        }, 10);

                        return q.promise;
                    };

                    var startTime = Date.now();
                    add(5, 1)
                        .then(function (result) {
                            return add(result, -10);
                        })
                        .then(function (result) {
                            return add(result, 2);
                        })
                        .then(function (result) {
                            return add(result, 3);
                        })
                        .then(function (result) {
                            $scope.result = result;
                        })
                        .catch(function (failure) {
                            $scope.failure = failure;
                        })
                        .finally(function () {
                            $scope.elapsedTime = Date.now() - startTime;
                        });
                });