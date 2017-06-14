/// <reference path="angular.js" />
/// <reference path="angular-cookies.js" />

var myApp = angular
                .module("myModule", ["ngCookies"])
                .controller("myController", function ($http, $cookies) {
                    var cookie = $cookies.get('lna2');
                    var token;
                    var url;

                    if (typeof cookie !== 'undefined') {
                        token = "hca|" + cookie;
                        url = "https://ecc9oe0bo0.execute-api.ap-southeast-2.amazonaws.com/dev/ca-auth?limit=1&num=1&sort=daten";
                    }
                    else {
                        url = "https://ecc9oe0bo0.execute-api.ap-southeast-2.amazonaws.com/dev/ca-rds?limit=2&num=2&sort=daten";
                    }

                    var successCallBack = function (response) {
                        document.getElementById("url").innerHTML = url;
                        document.getElementById("data").innerHTML = JSON.stringify(response.data, undefined, 2);
                    };

                    var errorCallBack = function (reason) {
                        document.getElementById("url").innerHTML = url;
                        document.getElementById("error").innerHTML = JSON.stringify(reason.data, undefined, 2);
                    }

                    $http({
                        method: "GET",
                        headers: {
                            'Authorization': token
                        },
                        url: url
                    })
                    .then(successCallBack, errorCallBack);
                });