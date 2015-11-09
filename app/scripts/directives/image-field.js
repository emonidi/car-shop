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
      template:'<div class="form-group"><label for="image">Снимка</label><img class="image" style="display:none;width:100%;margin-bottom:10px;"/><input type="file" id="image" name="image" class="form-control"/></div>',
      restrict: 'A',
      scope:{
        image:'=model'
      },
      link: function postLink(scope, element, attrs) {
        var model = $parse(attrs.ngModel)(scope);
        var image = element.find('.image');
        element.on('change',function(){
          var input = document.getElementById('image').files[0];
          var fileReader = new FileReader();
          fileReader.onload  = function(e){
              scope.image = fileReader.result
              image.attr('src',scope.image).show();
          };

          fileReader.readAsDataURL(input)
        });
      }
    };
  });
