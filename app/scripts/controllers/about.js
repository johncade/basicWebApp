'use strict';

/**
 * @ngdoc function
 * @name basicWebAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the basicWebAppApp
 */
angular.module('basicWebAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
