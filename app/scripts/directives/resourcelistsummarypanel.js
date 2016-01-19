'use strict';

/**
 * @ngdoc directive
 * @name taaTaskManagerApp.directive:resourceListSummaryPanel
 * @description
 * # resourceListSummaryPanel
 */
angular.module('taaTaskManagerApp')
  .directive('resourceListSummaryPanel', function () {
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
      }
    };
  });
