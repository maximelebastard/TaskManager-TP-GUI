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

        $scope.newTask = new Task();

        // This one doesn't work
        $scope.updateTask = function(task){
            console.log("updateTask");
            console.log(task);
            task.$save();
        };
        $scope.createTask = function(newTask){
            console.log("Create task");
            console.log(newTask);
            $scope.tasks.push(newTask);
            newTask.$save();
        };
        $scope.deleteTask = function(task){
            console.log("deleteTask");
            console.log(task);
            Task.delete({id: task.id}, function(){
                var index = $scope.tasks.indexOf(task);
                $scope.tasks.splice(index, 1);
            });

            return false;
        };
    });
