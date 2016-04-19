'use strict';

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('fr_FR', {
        'SAVE': 'Enregistrer',
        'SEND': 'Envoyer',
        'UPDATE': 'Modifier',
        'CREATE': 'Créer',
        'LOGIN.LOGIN': 'Se connecter',
        'LOGIN.USERNAME': 'Login',
        'LOGIN.PASSWORD': 'Mot de passe',
        'LOGIN.ERROR.WRONG_LOGIN_PASSWORD': 'Mauvais login mot de passe',
        'LOGIN.ERROR.EMPTY_LOGIN_PASSWORD': 'Le login et le mot de passe doivent être renseignés',
        'LOGIN.ERROR.EMPTY_PASSWORD': 'Le mot de passe doit être renseigné',
        'LOGIN.FORGOT_PASSWORD': 'Mot de passe oublié ?',
        'LOGIN.FORGOT_PASSWORD_DESC': 'Entrer votre email pour réinitialiser votre mot de passe',
        'LOGIN.FORGOT_PASSWORD_EMAIL': 'Email',
        'LOGIN.FORGOT_PASSWORD_SENDED': 'Un lien de réinitialisation a été envoyé à votre adresse e-mail.',
        'USER.MYPROFILE': 'Mon profil',
        'USER.CHANGE_PWD': 'Modifier mot de passe',
        'USER.LOGOUT': 'Se deconnecter',
        'USER.LOCK': 'Verrouiler',
        'USER.EDIT_PROFILE': 'Modifier le profil',
        'USER.PROFIL_UPDATED': 'Profil modifié',
        'USER.EMAIL': 'Adresse email',
        'USER.LASTNAME': 'Nom',
        'USER.FIRSTNAME': 'Prénom',
        'USER.PROFIL_PICTURE': 'Photo de profil',
        'USER.OLDPWD': 'Mot de passe actuel',
        'USER.NEWPWD': 'Nouveau mot de passe',
        'USER.CONFPWD': 'Confirmation du mot de passe',
        'USER.WRONG_OLD_PWD' : 'Le mot de passe actuel n\'est pas correct',
        'USER.NEW_PWD_SAME_OLD_PWD' : 'Le nouveau mot de passe est le même que le précedent',
        'USER.NEW_PWD_NOT_SAME_CONF_PWD' : 'La confirmation de mot de passe n\'est pas correcte',
        'USER.PWD_UPDATED' : 'Le mot de passe a été modifié',
        'USER.CHANGE_AVATAR': 'Changer ma photo de profil',
        'USER.SETTINGS': 'Paramètres',
        'USER.SETTINGS_SAVED': 'Paramètres enregistrés',
        'FORM.REQUIRED': 'Ce champ est obligatoire',
        'ERROR.SERVICE_UNVAIBLE': 'Service non disponible',
        'ERROR.WRONG_LOGIN_PASSWORD': 'Mauvais login mot de passe',
        'ERROR.INVALID_EMAIL': 'Email non valide',
        'ERROR.UNKNOW_EMAIL': 'Email inconnu',
        'ERROR.ACCESS_DENIED': 'Accès non autorisé',
        'ERROR.NOT_FOUND': 'Ressource non trouvée',
        'ERROR.EMAIL_NOT_VALID': 'Email incorrect',
        'ERROR.NUMBER_NOT_VALID': 'Ce champ doit être un nombre',
        '404.TITLE': '404',
        'ERROR': 'Erreur'
    });
}]);
