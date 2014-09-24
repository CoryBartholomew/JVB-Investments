'use strict';

angular.module('cbApp')
    .controller('propertyCtrl', ['$scope', function ($scope) {
        $scope.myInterval = -1;
        $scope.slides = [
            {
                image: '../../images/not_our_condo.png'
            },
            {
                image: '../../images/house2.png'
            }
        ];
    }]);