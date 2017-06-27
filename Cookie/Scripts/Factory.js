/// <reference path="TestFactory.js" />

myApp.factory("Factory", function ($http) {
    return {
        cookieReader: function () {
            return $http({
                method: "GET",
                withCredentials: true,
                url: "https://devapi-caseanalyser.lexisnexis.com/dev/cookie-reader2"
            })
        },

        apiSearch: function (token) {
            return $http({
                method: "GET",
                headers: {
                    'Authorization': 'hca|' + token
                },
                url: 'https://devapi-caseanalyser.lexisnexis.com/dev/ca-auth?limit=1&num=10&sort=daten'
            })
        }
    }
});