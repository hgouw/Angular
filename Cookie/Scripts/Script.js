/// <reference path="angular.js" />
/// <reference path="angular-cookies.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($http) {

                    var successCallBack = function (response) {
                        document.getElementById("data").innerHTML = JSON.stringify(response.data, undefined, 2);
                    };

                    var errorCallBack = function (reason) {
                        document.getElementById("error").innerHTML = JSON.stringify(reason.data, undefined, 2);
                    }

                    $http({
                        method: "GET",
                        url: "https://ecc9oe0bo0.execute-api.ap-southeast-2.amazonaws.com/dev/ca-rds?limit=1&num=1&sort=daten"
                    })
                    .then(successCallBack, errorCallBack);
                });