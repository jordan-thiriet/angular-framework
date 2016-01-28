'use strict';

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('fr_FR', {
        '$moduleUperCase.TITLE': '$moduleName'
    });
}]);
