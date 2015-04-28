'use strict';

/**
 * @ngdoc function
 * @name basicWebAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the basicWebAppApp
 */
angular.module('basicWebAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
