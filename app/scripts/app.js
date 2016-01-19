'use strict';

/**
 * @ngdoc overview
 * @name taaTaskManagerApp
 * @description
 * # taaTaskManagerApp
 *
 * Main module of the application.
 */
angular
    .module('taaTaskManagerApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/summary.html',
                controller: 'SummaryCtrl',
                controllerAs: 'summary'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
