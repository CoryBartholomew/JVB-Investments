'use strict';

var cbApp = angular.module("cbApp", ['ngRoute', 'ui.bootstrap', 'ngGrid'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

    })
