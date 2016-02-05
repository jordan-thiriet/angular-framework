'use strict';

app.config(['$stateProvider', '$urlRouterProvider', 'CONFIG', function ($stateProvider, $urlRouterProvider, CONFIG) {
    var templates = 'app/cors/templates/';

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: templates+CONFIG.theme+'/login.html',
            controller: 'LoginController'
        })
        .state('edit_profile', {
            url: "/edit-profile",
            templateUrl: templates+CONFIG.theme+'/user_edit.html',
            controller: 'UserEditController'
        })
        .state('change_password', {
            url: "/change-password",
            templateUrl: templates+CONFIG.theme+'/user_change_password.html',
            controller: 'UserChangePasswordController'
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
