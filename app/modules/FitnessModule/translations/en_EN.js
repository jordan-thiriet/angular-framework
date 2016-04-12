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
        'FITNESS.MEASURE_NOT_NUMBER': 'The field muste be a number',
        'FITNESS.UNITY_WEIGHT': 'Unity measure of weight'
    });
}]);