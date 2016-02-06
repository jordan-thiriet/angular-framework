'use strict';

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('fr_FR', {
        'FITNESS.TITLE': 'Fitness',
        'FITNESS.GRAPH': 'Graphique',
        'FITNESS.ADD.TITLE': 'Ajout mesure',
        'FITNESS.WEIGHT': 'Poids',
        'FITNESS.FAT_MASS': 'Masse graisseuse',
        'FITNESS.FLUIDS_MASS': 'Masse hydrique',
        'FITNESS.MUSCULE_MASS': 'Masse musculaire',
        'FITNESS.DATE': 'Date',
        'FITNESS.MEASURE_CREATED': 'Mesures enregistrées',
        'FITNESS.MEASURE_NOT_NUMBER': 'Toutes les mesures doivent être des nombres'
    });
}]);
