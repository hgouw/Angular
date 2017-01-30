/// <reference path="angular.min.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope, $http, $log) {

                    var successCallBack = function (response) {
                        $scope.data = response.data;
                        $log.info(response);
                    };

                    var errorCallBack = function (reason) {
                        $scope.error = reason.data;
                        $log.info(reason);
                    }

                    $http({
                        method: "GET",
                        url: "iLabsService.asmx/Search"
                    })
                    .then(successCallBack, errorCallBack);
                });