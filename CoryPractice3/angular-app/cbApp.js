'use strict';

/* App Module */

var cbApp = angular.module('cbApp', [
  'ngRoute',
  'ui.bootstrap'
]);

rtApp.config(['$routeProvider', 'cbRouterProvider',
function ($routeProvider, cbRouterProvider) {
    var routedViews, i;

    routedViews = cbRouterProvider.routedViews;
    for (i = 0; i < routedViews.length; i++) {
        $routeProvider.when(routedViews[i].path, routedViews[i]);
    }

    if (cbRouterProvider.defaultRoute) {
        $routeProvider.otherwise({
            redirectTo: cbRouterProvider.defaultRoute.path
        });
    }



}]);
