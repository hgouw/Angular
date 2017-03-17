/// <reference path="angular.js" />

_.each([1, 2, 3], alert); //=> alerts each number in turn...
_.each({one: 1, two: 2, three: 3}, alert); //=> alerts each number value in turn...

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); //=> [2, 4, 6]
alert('evens: ' + evens);

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); //=> [1, 3, 5]
alert('odds: ' + odds);

var SIX = 6;
var profile = 'profile';
var profileView = profile || SIX;
alert('profileView:' + profileView);