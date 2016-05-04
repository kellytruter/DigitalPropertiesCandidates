'use strict';

angular.module('shorttestApp')
  .controller('FundCtrl', ['$scope', '$http', function ($scope, $http) {
      $http.get('src/common/assets/data/fund.json').success(function(data) {
          $scope.fund = data.fund;
      });
  }]);
