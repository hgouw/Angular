/// <reference path="TestFactory.js" />

myApp.factory("Factory", function ($http) {
    return {
        cookieReader: function () {
            return $http({
                method: "GET",
                withCredentials: true,
                url: "https://devapi-caseanalyser.lexisnexis.com/dev/cookie-reader2"
            })
        }
    }
});