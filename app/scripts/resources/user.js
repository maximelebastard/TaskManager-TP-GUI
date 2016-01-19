angular.module('taaTaskManagerApp').factory('User', function($resource) {
    return $resource('/api/user/:id');
});