'use strict';

// Declare app level module which depends on views, and core components
angular.module('FunoChampionship', [
  'ngRoute',
  'FunoChampionship.driver',
  'FunoChampionship.drivers',
  'FunoChampionship.version',
  'FunoChampionship.services',
]).
config(['$locationProvider', '$routeProvider', '$sceDelegateProvider', function($locationProvider, $routeProvider, $sceDelegateProvider) {
  $locationProvider.hashPrefix('!');

  /*$sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain. **.
    'http://ergast.com/**'
  ]);*/

  $routeProvider.otherwise({redirectTo: '/drivers'});
}]);
