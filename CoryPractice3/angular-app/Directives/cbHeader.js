'use strict';

angular.module('cbApp')
.directive('cbHeader', ['$window', function rtHeaderDirective($window) {
    return {
        restrict: 'EA',
        templateUrl: '../angular-app/directives/cbHeader.html',
        replace: true,
        controller: ['$scope', function ($scope) {
            $scope.goToCallsList = function () {
                cbRouter.navigateToView('homepage', {});
            }
            $scope.loadView = function (viewName) {
                $window.location.href = routePath;
            };
        }]
    };
}]);