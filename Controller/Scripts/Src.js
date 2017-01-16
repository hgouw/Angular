/// <reference path="angular.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    $scope.message = "AngularJS Tutorial";
                    var country = {
                        name: 'Australia',
                        capital: 'Canberra',
                        flag: '/Images/aus1-flag.jpg'
                    };
                    $scope.country = country;
                });
