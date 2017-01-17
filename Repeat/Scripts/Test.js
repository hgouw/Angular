/// <reference path="angular.min.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var members = [
                        { firstName: "Herman", lastName: "Gouw", age: 56 },
                        { firstName: "Helen", lastName: "Gouw", age: 45 },
                        { firstName: "Sarah", lastName: "Gouw", age: 12 },
                        { firstName: "Olivia", lastName: "Gouw", age: 8 }
                    ];
                    $scope.members = members;

                    var families = [
                         {
                             parents: "Agus & Siuling",
                             children: [
                                 { firstName: "Matthew" },
                                 { firstName: "Joshua" }
                             ]
                         },
                         {
                             parents: "Denny & Christine",
                             children: [
                                 { firstName: "Adrian" },
                                 { firstName: "Irma" },
                                 { firstName: "Michael" }
                             ]
                         },
                         {
                             parents: "Mark & Elly",
                             children: [
                                 { firstName: "Cheryl" },
                                 { firstName: "Farris" }
                             ]
                         },
                         {
                             parents: "Sunny & Sandra",
                             children: [
                                 { firstName: "Carisa" },
                                 { firstName: "Reyhan" }
                             ]
                         },
                         {
                            parents: "Herman & Helen",
                            children: [
                                { firstName: "Sarah" },
                                { firstName: "Olivia" }
                            ]
                        },
                        {
                            parents: "Hilly & Eunyoung",
                            children: [
                                { firstName: "Rebecca" }
                            ]
                        },
                    ];
                    $scope.families = families;
                });