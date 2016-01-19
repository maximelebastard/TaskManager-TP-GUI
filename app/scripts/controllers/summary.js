'use strict';

/**
 * @ngdoc function
 * @name taaTaskManagerApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the taaTaskManagerApp
 */
angular.module('taaTaskManagerApp')
  .controller('SummaryCtrl', function ($scope, Epic, Story, Task) {
    $scope.epics = Epic.query();
    $scope.stories = Story.query();
    $scope.tasks = Task.query();
  });
