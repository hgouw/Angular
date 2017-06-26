/// <reference path="angular.js" />

var myApp = angular.module("myModule", []);

myApp.service("AuthService", function ($http, $q) {
    var deferred = $q.defer();

    this.cookieReader = function () {
        return $http({
            method: "GET",
            url: "https://devapi-caseanalyser.lexisnexis.com/dev/ca-rds?limit=2&num=2&sort=daten"
        })
        .then(function (response) {
            deferred.resolve(response.data);
            return deferred.promise;
        }, function (response) {
            deferred.reject(response);
            return deferred.promise;
        });
    };
});

myApp.controller("myController", function ($scope, $q, AuthService) {
    AuthService.cookieReader()
    .then(
        function (result) {
            $scope.data = result.TotalCases;
        },
        function (error) {
            $scope.data = error.statusText;
        }
   );
});