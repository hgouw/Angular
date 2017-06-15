/// <reference path="angular.js" />
/// <reference path="angular-cookies.js" />

var myApp = angular
                .module("myModule", ["ngCookies"])
                .controller("myController", function ($http, $cookies) {
                    var url = "https://devapi-caseanalyser.lexisnexis.com/dev/cookie-reader2";

                    $http.get(url, { withCredentials: true })
                    .then(function (response) {
                        document.getElementById("url").innerHTML = url;
                        document.getElementById("data").innerHTML = response.data.auth;
                    });
                });