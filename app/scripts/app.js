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
        'ngTouch',
        'ui.bootstrap.progressbar',
        'ui.bootstrap.tpls'
    ])
    .config(['$routeProvider','$httpProvider', function($routeProvider) {
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
