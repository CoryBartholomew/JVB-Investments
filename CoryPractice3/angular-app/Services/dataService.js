'use strict';

angular.module('cbApp')
.factory('dataService', ['$http', '$q',
    function ($http, $q) {
        var dataService = {};
        dataService.getProperties = function () {
            var deferred = $q.defer();
            $http.get('/Property/PropertyList', {
                params: {
                }
            }).success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        };

        dataService.getProperty = function (id) {
            var deferred = $q.defer();
            $http.get('/Property/SingleProperty', {
                params: {
                    id: id
                }
            }).success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        };
        
        return dataService;
        //dataService.getProperty = function ()
    }]);