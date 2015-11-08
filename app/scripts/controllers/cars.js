'use strict';

/**
 * @ngdoc function
 * @name carshopApp.controller:CarsCtrl
 * @description
 * # CarsCtrl
 * Controller of the carshopApp
 */
angular.module('carshopApp')
  .controller('CarsCtrl', function ($scope, $firebaseArray) {
    var ref = new Firebase('https://carshop.firebaseio.com/cars');
    var fbArr = $firebaseArray(ref);
    $scope.filter = 'all';
    fbArr.$loaded().then(function(data){
        $scope.cars = data
        $scope.allCars = data;
    });

    $scope.convertDate = function(dateString){
      var date = moment(new Date(dateString));
      return date.format('DD/MM/YYYY');
    }

    $scope.filterCars = function(){
      switch($scope.filter){
        case 'all':
          $scope.cars = $scope.allCars;
        break;
        case 'in_stock':
          $scope.cars = _.filter($scope.allCars, function(item){return item.in_stock})
        break;
        case 'not_in_stock':
          $scope.cars = _.filter($scope.allCars, function(item){return !item.in_stock})
        break;
      }
    }

});
