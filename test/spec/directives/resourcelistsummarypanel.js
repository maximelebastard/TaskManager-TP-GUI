'use strict';

describe('Directive: resourceListSummaryPanel', function () {

  // load the directive's module
  beforeEach(module('taaTaskManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<resource-list-summary-panel></resource-list-summary-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the resourceListSummaryPanel directive');
  }));
});
