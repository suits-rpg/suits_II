'use strict';

describe('Component: mainComponent', function() {

  // load the controller's module
  beforeEach(module('suitsIIApp'));
  beforeEach(module('stateMock'));

  var scope;
  var mainComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(
    _$httpBackend_,
    $http,
    $componentController,
    $rootScope,
    $state) {
      $httpBackend = _$httpBackend_;

      scope = $rootScope.$new();
      state = $state;
      mainComponent = $componentController('main', {
        $http: $http,
        $scope: scope
      });
  }));

});
