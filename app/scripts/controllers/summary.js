'use strict';

/**
 * @ngdoc function
 * @name taaTaskManagerApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the taaTaskManagerApp
 */
angular.module('taaTaskManagerApp')
  .controller('SummaryCtrl', function ($scope, Epic, Story, Task, Sprint, User) {
    $scope.epics = Epic.query();
    $scope.stories = Story.query();
    $scope.tasks = Task.query();
    $scope.sprints = Sprint.query();
    $scope.users = User.query();
  });
