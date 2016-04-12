'use strict';

var app = angular.module('app',
    [
        'ngAnimate',
        'toaster',
        'ui.utils',
        'ui.load',
        'ui.jq',
        'ui.bootstrap',
        'ui.router',
        'ui.select',
        'pascalprecht.translate',
        'restangular',
        'btford.socket-io',
        'angularLoad',
        'angular-md5',
        'firebase',
        'homeModule',
		'fitnessModule',
        'highcharts-ng',
        'ngImgCrop',
		//InsertNewModule
    ])

    .run(['$rootScope', 'CONFIG', 'CONFIG_REST', 'CONFIG_SOCKET', '$rest', '$state', 'errorsService', 'translationService', 'User', '$timeout', '$settings', function ($rootScope, CONFIG, CONFIG_REST, CONFIG_SOCKET, $rest, $state, errorsService, translationService, User, $timeout, $settings) {
        /**
         * Init
         */
        translationService.init();
        $rootScope.appName = CONFIG.appName;
        $rootScope.version = CONFIG.version;
        $rootScope.urlPublic = CONFIG_REST.urlPublic;
        $rootScope.checkLogin = CONFIG.login;
        $rootScope.chartColor = CONFIG.chartColor;
        $rootScope.showHeader = true;
        $rootScope.showFooter = true;
        $rootScope.lastPage = null;

        $rootScope.urlSocket = 'http://localhost:8080/socket.io/socket.io.js';

        $rest.init();

        if(CONFIG.login) {
            User.init();
        }

        $settings.init();

        function byteLength(str) {
            // returns the byte length of an utf8 string
            var s = str.length;
            for (var i=str.length-1; i>=0; i--) {
                var code = str.charCodeAt(i);
                if (code > 0x7f && code <= 0x7ff) s++;
                else if (code > 0x7ff && code <= 0xffff) s+=2;
                if (code >= 0xDC00 && code <= 0xDFFF) i--; //trail surrogate
            }
            return s;
        }

        $rootScope.urlServer = CONFIG_REST.server;
        $rootScope.urlStatic = CONFIG_REST.server_static;
        $rootScope.menus = [];
        $rootScope.$on("$stateChangeStart", function (event, toState) {
            $rootScope.showHeader = true;
            $rootScope.showFooter = true;
            $timeout(function() {
                if($rootScope.refreshMenu !== undefined) {
                    $rootScope.refreshMenu(toState.name);
                }
            },100);
            if(CONFIG.login) {
                /*If user is not logged redirect to login page*/
                if ($rootScope.user === null || !$rootScope.user.isLogged) {
                    if (toState.url !== '/login' && toState.url !== '/forgot-password') {
                        event.preventDefault();
                        $state.go('login');
                    } else {
                        $rootScope.showHeader = false;
                        $rootScope.showFooter = false;
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
    }]);

