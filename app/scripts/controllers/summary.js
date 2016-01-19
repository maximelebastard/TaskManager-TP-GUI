'use strict';

/**
 * @ngdoc function
 * @name taaTaskManagerApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the taaTaskManagerApp
 */
angular.module('taaTaskManagerApp')
  .controller('SummaryCtrl', function ($scope, Epic) {
    $scope.epics = Epic.query();
  });
