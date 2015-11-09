'use strict';

/**
 * @ngdoc service
 * @name carshopApp.geocode
 * @description
 * # geocode
 * Service in the carshopApp.
 */
angular.module('carshopApp')
  .factory('geocode', function ($q, $http) {
      return function(){
        var deferred = $q.defer();
       return function(address){
          var coords = null;
          $http.get('//maps.googleapis.com/maps/api/geocode/json?address='+address)
             .success(function(data){
               coords = data.results[0].geometry.location;
               deferred.resolve(coords);

             });

         return deferred.promise;
      };
      };
  });
