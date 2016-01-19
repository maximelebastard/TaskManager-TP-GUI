angular.module('taaTaskManagerApp').factory('Epic', function($resource) {
    return $resource('/api/epic/:id');
});