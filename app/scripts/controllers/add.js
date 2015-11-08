'use strict';

/**
 * @ngdoc function
 * @name carshopApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the carshopApp
 */
angular.module('carshopApp')
  .controller('AddCtrl', function ($scope,$location, $firebaseArray) {
    var ref = new Firebase('https://carshop.firebaseio.com/cars');
    $scope.submit = function(){
      $scope.Model.image = $scope.image;
      $scope.Model.production_date = $scope.production_date.toString();
      $scope.cars = $firebaseArray(ref);
      $scope.cars.$add($scope.Model).then(function(data){
        console.log(data);
        $location.path('cars');
      },function(err){
        console.log(err);
      })
    };
  });
