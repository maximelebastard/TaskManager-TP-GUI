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
      templateUrl: 'views/resourcelistsummarypanel.html',
      restrict: 'E',
      scope: {
        panelTitle: '@',
        labels:'=',
        collection: '=',
        width: '='
      }
    };
  });
