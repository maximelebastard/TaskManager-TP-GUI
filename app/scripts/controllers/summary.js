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

    //$scope.newTask = new Task();  //create new movie instance. Properties will be set via ng-model on UI

    $scope.addTask = function() { //create a new movie. Issues a POST to /api/movies
        /*console.log("ADDDD");
        $scope.tasks.push($scope.newTask);
        $scope.tasks.$save(function() {
            console.log("saved");
        });*/
        console.log("Titi");
    };
  });
