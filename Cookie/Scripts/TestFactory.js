/// <reference path="angular.js" />
/// <reference path="angular-cookies.js" />

var myApp = angular.module("myModule", ["ngCookies"]);

myApp.controller("myController", function ($cookies, $scope, Factory) {
    Factory.cookieReader()
    .then(function (response) {
        $scope.factoryAuth = response.data.auth;
        $cookies.put('auth', $scope.factoryAuth);
        Factory.apiSearch($scope.factoryAuth)
        .then(function (response) {
            $scope.factoryApiSearch = JSON.stringify(response.data, undefined, 2);
        });
        if ($cookies.get('auth') != "")
            $scope.cookie = "The cookie is " + $cookies.get('auth');
        else
            $scope.cookie = "There is no cookie";
    });
});