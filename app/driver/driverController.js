'use strict';

angular.module('FunoChampionship.driver', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/driver', {
    templateUrl: 'driver/driver.html',
    controller: 'driverController'
  });
}])

.controller('driverController', ['$scope', '$routeParams', 'ergastAPIservice', function($scope, $routeParams, ergastAPIservice) {
  debugger;
  $scope.id = $routeParams.id;
  $scope.races = [];
  $scope.driver = null;

    ergastAPIservice.getDriverDetails($scope.id).then(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
    });

    ergastAPIservice.getDriverRaces($scope.id).then(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    }); 
}]);