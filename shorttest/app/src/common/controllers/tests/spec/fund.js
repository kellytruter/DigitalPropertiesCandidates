'use strict';

describe('Controller: FundCtrl', function () {

  // load the controller's module
  beforeEach(module('shorttestApp'));

  var FundCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FundCtrl = $controller('FundCtrl', {
      $scope: scope
    });
  }));

  it('should attach a fund to the scope', function () {
    expect(scope.fund.length).toBe(19);
  });
});
