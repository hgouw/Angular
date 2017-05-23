/// <reference path="angular.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope, $http, $log) {

                    var successCallBack = function (response) {
                        document.getElementById("json").innerHTML = JSON.stringify(response.data, undefined, 2);
                    };

                    var errorCallBack = function (reason) {
                        $scope.error = reason.data;
                        console.log(reason);
                    }

                    $http({
                        method: "GET",
                        url: "https://ecc9oe0bo0.execute-api.ap-southeast-2.amazonaws.com/dev/ca-rds?limit=1&num=1&sort=daten"
                    })
                    .then(successCallBack, errorCallBack);
                });