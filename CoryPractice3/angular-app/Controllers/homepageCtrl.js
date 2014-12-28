'use strict';

angular.module('cbApp')
    .controller('homePageCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        dataService.getProperties()
            .then(function (properties) {
                $scope.properties = properties;
            }, function () {

            });
    }]);