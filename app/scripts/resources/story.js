angular.module('taaTaskManagerApp').factory('Story', function($resource) {
    return $resource('/api/story/:id');
});