/// <reference path="angular.js" />
/// <reference path="angular-cookies.js" />

var myApp = angular
                .module("myModule", ["ngCookies"])
                .controller("myController", function ($http, $cookies) {
                    var url = "https://ecc9oe0bo0.execute-api.ap-southeast-2.amazonaws.com/dev/cookie-reader";

                    $http.get(url, { withCredentials: true })
                    .then(function (response) {
                        authCookie = response.data.auth;
                        document.getElementById("cookie").innerHTML = authCookie;
                    });
                });