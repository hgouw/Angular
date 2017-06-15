/// <reference path="angular.js" />
/// <reference path="angular-cookies.js" />

var myApp = angular
                .module("myModule", ["ngCookies"])
                .controller("myController", function ($http, $cookies) {
                    var url = "https://devapi-caseanalyser.lexisnexis.com/dev/cookie-reader2";

                    var successCallBack = function (response) {
                        document.getElementById("url").innerHTML = url;
                        document.getElementById("data").innerHTML = response.data.auth;
                    };

                    var errorCallBack = function (reason) {
                        document.getElementById("url").innerHTML = url;
                        document.getElementById("data").innerHTML = JSON.stringify(reason.data, undefined, 2);
                    }

                    $http({
                        method: "GET",
                        withCredentials: true,
                        url: url
                    })
                    .then(successCallBack, errorCallBack);
                });