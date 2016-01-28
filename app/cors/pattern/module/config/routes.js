'use strict';

app.config(['$stateProvider', 'CONFIG', function ($stateProvider, CONFIG) {
    var templates = 'app/modules/$moduleNameModule/templates/';

    $stateProvider
        .state('$moduleLower', {
            url: "/$moduleUrl",
            templateUrl: templates+CONFIG.theme+'/index.html',
            controller: '$moduleNameController'
        });
}]);
