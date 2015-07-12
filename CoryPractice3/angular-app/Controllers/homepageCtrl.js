'use strict';

angular.module('cbApp')
    .controller('homePageCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        dataService.getProperties()
            .then(function (properties) {
                $scope.properties = properties;
            }, function () {

            });
        $scope.navigateToProperty = function navigateToProperty(ID) {
                window.location.href = '/AngularApp/AppRoot/' + ID;

        };
        $scope.gridOptions = {
            data: 'properties',
            columnDefs: [
                { field: 'Name', displayName: 'Name', width: 90, cellTemplate: 'angular-app/Templates/CellTemplateWrapTitle.html' }
                //{ field: 'description', displayName: $scope.labels.description, cellTemplate: '/Templates/CellTemplateWrapTitle.html' },
                //{ field: 'quantity', displayName: $scope.labels.quantity, width: 90, cellTemplate: '<div class="ngCellText alignCenter">{{row.getProperty(col.field)}}</div>' },
                //{ field: 'category', displayName: $scope.labels.category, cellTemplate: '/Templates/CellTemplateWrapTitle.html' },
                //{ field: 'configurationDetailCount', displayName: $scope.labels.configurationDetails, cellTemplate: '<div class="ngCellText alignCenter">{{row.getProperty(col.field)}}</div>' },
                //{ width: '30', cellTemplate: '<div class="ngCellText alignCenter" title="' + $scope.labels.addEditConfigurations + '"><a href="" ng-click="addEditConfiguration(row)"><img src="/Content/Images/edit.png" alt="" /></a></div>' },
            ],
            showFilter: false,
            enableColumnResize: true,
            enableColumnReordering: false,
            multiSelect: false,
            enableRowSelection: false,
            sortInfo: { fields: ['number'], directions: ['asc'] },
        };
    }]);