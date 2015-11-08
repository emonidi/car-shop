'use strict';

/**
 * @ngdoc overview
 * @name carshopApp
 * @description
 * # carshopApp
 *
 * Main module of the application.
 */
angular
  .module('carshopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAutocomplete',
    'firebase',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl',
        controllerAs: 'add'
      })
      .when('/cars', {
        templateUrl: 'views/cars.html',
        controller: 'CarsCtrl',
        controllerAs: 'cars'
      })
      .when('/cars/:id',{
        templateUrl:'views/car.html',
        controller:'CarCtrl',
        controllerAs:'car'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
