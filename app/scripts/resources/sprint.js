angular.module('taaTaskManagerApp').factory('Sprint', function($resource) {
    return $resource('/api/sprint/:id');
});