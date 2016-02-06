'use strict';

app.config(['$stateProvider', 'CONFIG', function ($stateProvider, CONFIG) {
    var templates = 'app/modules/FitnessModule/templates/';

    $stateProvider
        .state('fitness', {
            url: "/fitness",
            templateUrl: templates+CONFIG.theme+'/index.html',
            controller: 'FitnessController'
        })
        .state('fitness-add', {
            url: "/fitness/add",
            templateUrl: templates+CONFIG.theme+'/add.html',
            controller: 'FitnessAddController'
        });
}]);
