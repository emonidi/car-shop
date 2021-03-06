'use strict';

describe('Directive: imageField', function () {

  // load the directive's module
  beforeEach(module('carshopApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<image-field></image-field>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imageField directive');
  }));
});
