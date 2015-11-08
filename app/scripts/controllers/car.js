'use strict';

/**
 * @ngdoc function
 * @name carshopApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the carshopApp
 */
angular.module('carshopApp')
  .controller('CarCtrl', function ($scope,$location, $firebaseArray, $routeParams, geocode) {
    var ref = new Firebase('https://carshop.firebaseio.com/cars');
    $scope.getCoords = new geocode();
    
    var arr = $firebaseArray(ref);
    arr.$loaded().then(function(){
      $scope.car = arr.$getRecord($routeParams.id);
      getCoords();
    });

    function getCoords(){
      $scope.getCoords($scope.car.location).then(function(location){
          $scope.map = {center: {latitude:location.lat,longitude:location.lng}, zoom: 16};
          console.log($scope.map.center);
      });
    }

    $scope.convertDate = function(dateString){
      var date = moment(new Date(dateString));
      return date.format('DD/MM/YYYY');
    }

  });
