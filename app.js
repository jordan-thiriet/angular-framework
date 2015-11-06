'use strict';

var app = angular.module('app',
    [
        'ui.bootstrap',
        'ui.router',
        'pascalprecht.translate',
        'restangular',
        'btford.socket-io',
        'angularLoad',
        'firebase',
        'homeModule'
    ])

    .run(function ($rootScope, CONFIG, CONFIG_REST, CONFIG_SOCKET, $rest, $state, errorsService, translationService, User, $timeout) {
        /**
         * Init
         */
        translationService.init();
        $rootScope.appName = CONFIG.appName;
        $rootScope.version = CONFIG.version;
        $rootScope.typeAlert = CONFIG.typeAlert;
        $rootScope.checkLogin = CONFIG.login;
        errorsService.init();
        $rest.init();
        if(CONFIG.login) {
            User.init();
        }
        $rootScope.urlServer = CONFIG_REST.server;
        $rootScope.urlStatic = CONFIG_REST.server_static;
        $rootScope.menus = [];
        $rootScope.$on("$stateChangeStart", function (event, toState) {
            $timeout(function() {
                if($rootScope.refreshMenu !== undefined) {
                    $rootScope.refreshMenu(toState.name);
                }
            },100);
            if(CONFIG.login) {
                /*If user is not logged redirect to login page*/
                if ($rootScope.user === null || !$rootScope.user.isLogged) {
                    if (toState.url !== '/login') {
                        event.preventDefault();
                        $state.go('login');
                    }
                } else {
                    /*If user is logged redirect to home page*/
                    if (toState.url === '/login') {
                        event.preventDefault();
                        $state.go('home');
                    }
                }
            } else {
                if (toState.url === '/login') {
                    event.preventDefault();
                    $state.go('home');
                }
            }
        });
    });

