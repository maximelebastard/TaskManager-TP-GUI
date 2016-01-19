'use strict';

/**
 * @ngdoc directive
 * @name taaTaskManagerApp.directive:resourceListSummaryPanel
 * @description
 * # resourceListSummaryPanel
 */
angular.module('taaTaskManagerApp')
    .directive('resourceListSummaryPanel', ['$filter','User', function($filter, User) {
        return {
            restrict: 'E',
            scope: {
                panelTitle: '@',
                labels:'=',
                collection: '=',
                width: '=',
                updateMethod: '&',
                createMethod: '&',
                deleteMethod: '&',
                formEntity: '='
            },
            templateUrl: function(tElement, tAttrs) {
                return tAttrs.templateUrl;
            },
            link: function (scope, element, attrs) {
                scope.users = User.query();

                scope.internalCreate = function(scope){
                    console.log("Internal create");
                    console.log(scope.summary);
                }
            }
        };
    }]);
