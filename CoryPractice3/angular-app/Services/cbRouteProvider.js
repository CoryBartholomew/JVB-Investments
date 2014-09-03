'use strict';

angular.module('cbApp.cbRouter', [])
    .provider('rtRouter', function rtRouterProvider() {
        var defaultRoute,
            views;

        views = {

            homepage: {
                name: 'homepage',
                path: '/homepage',
                templateUrl: getTemplatePath('calldetails/materials/materials.html'),
                controller: 'materialsCtrl',
                resolve: {
                    materials: ['$route', 'callService', function ($route, callService) {
                        return callService.getCallMaterials($route.current.params.callid);
                    }],
                    availableWarehouses: ['$route', 'callService', function ($route, callService) {
                        return callService.getAvailableWarehouses($route.current.params.callid);
                    }],
                    callEditability: ['$route', 'callService', function ($route, callService) {
                        return callService.getEditability($route.current.params.callid);
                    }]
                }

                //template: ' ',
                //controller: ['$window', '$route', function ($window, $route) {
                //    $window.location.replace(generateRoutePath('../pparts.aspx?callid=:callid', $route.current.params));
                //        }]
            }
        };
        defaultRoute = angular.copy(views.callslist);
        this.defaultRoute = defaultRoute;

        this.routedViews = [
            views.callslist,
            views.close,
            views.summary,
            views.materials,
            views.meters,
            views.problemsandrepairs,
            views.miscellaneous,
            views.labors,
            views.notes,
            views.exchanges,
            views.history
            // additional views that should become non-routed once their dependent page is finished
            , views.callinfo
            , views.equipmentreplace
            , views.odometers_confirmation
            , views.odometers_popup
            , views.reassign
            , views.showgaps
            , views.verificationinfo
        ];

        function getTemplatePath(template) {
            return '../angular-app/' + template;
        }
        function findView(viewName) {
            var view = views[viewName];
            if (!view) {
                view = defaultRoute;
            }

            return angular.copy(view);
        };
        function generateRoutePath(path, routeParams) {
            for (var param in routeParams) {
                if (routeParams.hasOwnProperty(param)) {
                    if (path.indexOf(':' + param) > 0) {
                        path = path.replace(':' + param, routeParams[param]);
                    }
                    else if (path.indexOf('?') > 0) {
                        path += '&' + param + '=' + routeParams[param];
                    }
                    else {
                        path += '?' + param + '=' + routeParams[param];
                    }
                }
            }

            return path;
        }

        this.$get = ['$window', '$location',
            function rtRouterFactory($window, $location) {
                function navigateToPath(path) {
                    $window.location.href = path;
                };

                function navigateToView(viewName, routeParams, replace) {
                    var view, routePath;

                    view = findView(viewName);
                    routePath = generateRoutePath(view.path, routeParams);

                    if (routePath.indexOf('..') === 0) {
                        if (replace) {
                            $window.location.replace(routepath);
                        } else {
                            $window.location.href = routePath;
                        }
                    } else {
                        if (replace) {
                            $location.replace().url(routePath);
                        } else {
                            $location.url(routePath);
                        }
                    }
                };

                function windowBeforeUnload(handler) {
                    $window.onbeforeunload = handler;
                }

                return {
                    findView: findView,
                    navigateToPath: navigateToPath,
                    navigateToView: navigateToView,
                    windowBeforeUnload: windowBeforeUnload
                };
            }];
    })