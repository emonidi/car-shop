'use strict';

/**
 * @ngdoc directive
 * @name carshopApp.directive:imageField
 * @description
 * # imageField
 */
angular.module('carshopApp')
  .directive('imageField', function ($parse) {
    return {
      templateUrl:'../views/templates/image-field.html',
      restrict: 'A',
      scope:{
        image:'=model'
      },
      link: function postLink(scope, element, attrs) {
        var model = $parse(attrs.ngModel)(scope);
        element.on('change',function(){
          var input = document.getElementById('image').files[0];
          var fileReader = new FileReader();
          fileReader.onload  = function(e){
              scope.image = fileReader.result
          };

          fileReader.readAsDataURL(input)
        });
      }
    };
  });
