/// <reference path="Test.js" />

myApp.service("AuthService", function ($http, $q) {
    var deferred = $q.defer();

    this.cookieReader = function () {
        return $http({
            method: "GET",
            withCredentials: true,
            url: "https://devapi-caseanalyser.lexisnexis.com/dev/cookie-reader2"
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