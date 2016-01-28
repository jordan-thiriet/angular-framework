'use strict';

app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('en_EN', {
        '$moduleUperCase.TITLE': '$moduleName'
    });
}]);