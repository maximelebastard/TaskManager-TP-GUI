angular.module('taaTaskManagerApp').factory('Task', function($resource) {
    return $resource('/api/task/:id');
});