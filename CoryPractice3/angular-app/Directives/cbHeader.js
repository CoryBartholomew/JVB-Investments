'use strict';

angular.module('cbApp')
.directive('cbHeader', ['cbRouter', function rtHeaderDirective(cbRouter) {
    return {
        restrict: 'EA',
        templateUrl: '../angular-app/directives/cbHeader.html',
        replace: true,
        controller: ['$scope', function ($scope) {
            $scope.goToCallsList = function () {
                cbRouter.navigateToView('homepage', {});
            }
        }]
    };
}]);