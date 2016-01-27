'use strict';

app.config(['$stateProvider', '$urlRouterProvider', 'CONFIG', function ($stateProvider, $urlRouterProvider, CONFIG) {
    var templates = 'app/cors/templates/';

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: templates+CONFIG.theme+'/login.html',
            controller: 'LoginController'
        })
        .state('lock', {
            url: "/lock",
            templateUrl: templates+CONFIG.theme+'/lockscreen.html',
            controller: 'LockController'
        })
        .state('404',{
            url: "/404",
            templateUrl: templates+CONFIG.theme+'/404.html',
            controller: function(){}
        }
    );
    $urlRouterProvider.otherwise('/404');
}]);
