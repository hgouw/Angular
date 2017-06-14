/// <reference path="angular.js" />
/// <reference path="angular-cookies.js" />

var myApp = angular
                .module("myModule", ["ngCookies"])
                .controller("myController", function ($http, $cookies) {
                    var url = "https://ecc9oe0bo0.execute-api.ap-southeast-2.amazonaws.com/dev/cookie-reader";

                    var successCallBack = function (response) {
                        document.getElementById("url").innerHTML = url;
                        document.getElementById("cookie").innerHTML = response.data.auth;
                    };

                    var errorCallBack = function (reason) {
                        document.getElementById("url").innerHTML = url;
                        document.getElementById("error").innerHTML = JSON.stringify(reason.data, undefined, 2);
                    }

                    $http({
                        method: "GET",
                        withCredentials: true,
                        url: url
                    })
                    //.then(function (response) { cookie = response.data.auth; });
                    .then(successCallBack, errorCallBack);
                });