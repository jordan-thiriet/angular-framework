'use strict';

app.config(['$stateProvider', 'CONFIG', function ($stateProvider, CONFIG) {
    var templates = 'app/modules/HomeModule/templates/';

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: templates+CONFIG.theme+'/home.html',
            controller: 'HomeController'
        });
}]);
