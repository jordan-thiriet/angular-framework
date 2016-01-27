'use strict';

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('fr_FR', {
        'LOGIN.LOGIN': 'Se connecter',
        'LOGIN.USERNAME': 'Login',
        'LOGIN.PASSWORD': 'Mot de passe',
        'LOGIN.ERROR.WRONG_LOGIN_PASSWORD': 'Mauvais login mot de passe',
        'LOGIN.ERROR.EMPTY_LOGIN_PASSWORD': 'Le login et le mot de passe doivent être renseignés',
        'LOGIN.ERROR.EMPTY_PASSWORD': 'Le mot de passe doit être renseigné',
        'USER.LOGOUT': 'Se deconnecter',
        'USER.LOCK': 'Verrouiler',
        'ERROR.SERVICE_UNVAIBLE': 'Service non disponible',
        'ERROR.WRONG_LOGIN_PASSWORD': 'Mauvais login mot de passe',
        'ERROR.INVALID_EMAIL': 'Email non valide',
        'ERROR.ACCESS_DENIED': 'Accès non autorisé',
        '404.TITLE': '404',
        'ERROR': 'Erreur'
    });
}]);
