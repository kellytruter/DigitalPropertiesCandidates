'use strict';

angular.module('shorttestApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/common/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/fund', {
          templateUrl: 'src/common/views/fund.html',
          controller: 'FundCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .filter('defaultValue', function () {
    return function (item, defaultValue) {
        defaultValue = defaultValue || '- -';

        if ((typeof item === 'undefined') || item === null || item === '' || (item.constructor == Array && item.length == 0) || item === false || item === 0) {
            item = defaultValue;
        }

        return item;
    };
  })
  .filter('dateFormat', function () {
    return function (input, format) {
        format = format || 'dd-mm-yyyy'; // default format
        var parts = input.match(/(\d+)/g),
            i = 0, fmt = {};
        // extract date-part indexes from the format
        format.replace(/(yyyy|dd|mm)/g, function(part) { fmt[part] = i++; });

        var date = new Date(parts[fmt['yyyy']], parts[fmt['mm']]-1, parts[fmt['dd']]);
        var day = date.getDate();
        var month = parseInt(date.getMonth()) + 1;
        var year = date.getFullYear();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return month + '/' + day + '/' + year;
    };
  });
