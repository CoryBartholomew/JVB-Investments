﻿'use strict';

var cbApp = angular.module("cbApp", ['ngRoute', 'ui.bootstrap'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

    })
