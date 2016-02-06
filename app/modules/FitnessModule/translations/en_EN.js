'use strict';

app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('en_EN', {
        'FITNESS.TITLE': 'Fitness',
        'FITNESS.GRAPH': 'Graphic',
        'FITNESS.ADD.TITLE': 'Add measure',
        'FITNESS.WEIGHT': 'Weight',
        'FITNESS.FAT_MASS': 'Fat mass',
        'FITNESS.FLUIDS_MASS': 'Fluids mass',
        'FITNESS.MUSCULE_MASS': 'Muscle mass',
        'FITNESS.DATE': 'Date',
        'FITNESS.MEASURE_CREATED': 'Measures saved',
        'FITNESS.MEASURE_NOT_NUMBER': 'All measures must be an number'
    });
}]);