/// <reference path="angular.min.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var clouds = [
                        { name: "Azure", likes: 0, dislikes: 0 },
                        { name: "AWS", likes: 0, dislikes: 0 },
                        { name: "Google", likes: 0, dislikes: 0 }
                    ];

                    $scope.clouds = clouds;

                    $scope.incrementLikes = function (cloud) {
                        cloud.likes++;
                    }

                    $scope.incrementDislikes = function (cloud) {
                        cloud.dislikes++;
                    }
                });