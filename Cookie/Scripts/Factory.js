/// <reference path="Test.js" />

myApp.factory("Factory", function ($http, $q) {
    return {
        cookieReader: function () {
            var deferred = $q.defer();

            function callApi() {
                $http({
                    method: "GET",
                    url: "https://ecc9oe0bo0.execute-api.ap-southeast-2.amazonaws.com/dev/ca-rds?limit=1&num=10&sort=daten"
                })
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject("apiSearch: " + status);
                })
            };

            callApi();

            return deferred.promise;
        }
    };
});