/// <reference path="angular.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope, $http) {
                    //$http.get('CompanyService.asmx/GetAllCompanies')
                    $http({method: 'GET', url: 'CompanyService.asmx/GetAllCompanies'})                       
                         .then(function (response) {
                             $scope.companies = response.data;
                         });
                });