angular.module('FunoChampionship.services', [])
  .factory('ergastAPIservice', function($http) {

    return {

      getDrivers: function() {
        return $http.get('http://ergast.com/api/f1/2013/driverStandings.json').then(function(response){
          return response.data;
        });
      },

      getDriverDetails: function(id) {
        debugger;
        var url = 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json';
        return $http.get(url).then(function(response) {
          return response.data;
        });
      },

      getDriverRaces: function( id) {
        var url = 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json';
        return $http.get(url).then(function(response){
          return response.data;
        });
      }
    }

  });