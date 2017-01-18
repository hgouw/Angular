/// <reference path="angular.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope, $http, $log) {
                    //shortcut method
                    //$http.get('CompanyService.asmx/GetAllCompanies')

                    var successCallBack = function (response) {
                        $scope.companies = response.data;
                        $log.info(response);
                    };

                    var errorCallBack = function (reason) {
                        $scope.error = reason.data;
                        $log.info(reason);
                    }

                    $http({ method: 'GET', url: 'CompanyService.asmx/GetAllCompanies' })
                         //.then(function (response) {
                         //    $scope.companies = response.data;
                         //    $log.info(response); //useful for debugging
                         //}, function (reason) {
                         //    $scope.error = reason.data;
                         //    $log.info(reason);
                         //});
                         .then(successCallBack, errorCallBack);
                });