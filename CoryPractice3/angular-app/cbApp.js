'use strict';

/* App Module */

var cbApp = angular.module('cbApp', [
  'ngRoute',
]);

cbApp.config(['$routeProvider',
function ($routeProvider) {
    
    $routeProvider.when('/' , {
        templateUrl: 'templates/admin.html',
        controller: 'adminController'
    }).
    when('/rights', {
        templateUrl: 'templates/rights.html',
        controller: 'rightsController'
    });



}]);
