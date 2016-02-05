'use strict';

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('fr_FR', {
        'SAVE': 'Enregistrer',
        'UPDATE': 'Modifier',
        'CREATE': 'Créer',
        'LOGIN.LOGIN': 'Se connecter',
        'LOGIN.USERNAME': 'Login',
        'LOGIN.PASSWORD': 'Mot de passe',
        'LOGIN.ERROR.WRONG_LOGIN_PASSWORD': 'Mauvais login mot de passe',
        'LOGIN.ERROR.EMPTY_LOGIN_PASSWORD': 'Le login et le mot de passe doivent être renseignés',
        'LOGIN.ERROR.EMPTY_PASSWORD': 'Le mot de passe doit être renseigné',
        'USER.MYPROFILE': 'Mon profil',
        'USER.CHANGE_PWD': 'Modifier mot de passe',
        'USER.LOGOUT': 'Se deconnecter',
        'USER.LOCK': 'Verrouiler',
        'USER.EDIT_PROFILE': 'Modifier le profil',
        'USER.PROFIL_UPDATED': 'Profil modifié',
        'USER.EMAIL': 'Adresse email',
        'USER.LASTNAME': 'Nom',
        'USER.FIRSTNAME': 'Prénom',
        'USER.OLDPWD': 'Mot de passe actuel',
        'USER.NEWPWD': 'Nouveau mot de passe',
        'USER.CONFPWD': 'Confirmation du mot de passe',
        'USER.WRONG_OLD_PWD' : 'Le mot de passe actuel n\'est pas correct',
        'USER.NEW_PWD_SAME_OLD_PWD' : 'Le nouveau mot de passe est le même que le précedent',
        'USER.NEW_PWD_NOT_SAME_CONF_PWD' : 'La confirmation de mot de passe n\'est pas correcte',
        'USER.PWD_UPDATED' : 'Le mot de passe a été modifié',
        'ERROR.SERVICE_UNVAIBLE': 'Service non disponible',
        'ERROR.WRONG_LOGIN_PASSWORD': 'Mauvais login mot de passe',
        'ERROR.INVALID_EMAIL': 'Email non valide',
        'ERROR.ACCESS_DENIED': 'Accès non autorisé',
        'ERROR.NOT_FOUND': 'Ressource non trouvée',
        '404.TITLE': '404',
        'ERROR': 'Erreur'
    });
}]);
