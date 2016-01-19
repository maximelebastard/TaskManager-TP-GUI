'use strict';

/**
 * @ngdoc directive
 * @name taaTaskManagerApp.directive:resourceListSummaryPanel
 * @description
 * # resourceListSummaryPanel
 */
angular.module('taaTaskManagerApp')
  .directive('resourceListSummaryPanel', ['User', function(User) {
    return {
      restrict: 'E',
      scope: {
        panelTitle: '@',
        labels:'=',
        collection: '=',
        width: '='
      },
      templateUrl: function(tElement, tAttrs) {
        return tAttrs.templateUrl;
      },
      link: function (scope, element, attrs) {
        scope.users = User.query();
        console.log(scope.users);
      }
    };
  }]);
