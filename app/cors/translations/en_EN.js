'use strict';

app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('en_EN', {
        'SAVE': 'Save',
        'UPDATE': 'Update',
        'CREATE': 'Create',
        'LOGIN.LOGIN': 'Login',
        'LOGIN.USERNAME': 'Username',
        'LOGIN.PASSWORD': 'Password',
        'LOGIN.ERROR.WRONG_LOGIN_PASSWORD': 'Wrong username or password',
        'LOGIN.ERROR.EMPTY_LOGIN_PASSWORD': 'Username and password cannot be empty',
        'LOGIN.ERROR.EMPTY_PASSWORD': 'Password cannot be empty',
        'USER.MYPROFILE': 'My profile',
        'USER.CHANGE_PWD': 'Modify password',
        'USER.LOGOUT': 'Logout',
        'USER.LOCK': 'Lock',
        'USER.EDIT_PROFILE': 'Edit profile',
        'USER.UPDATED': 'Profile updated',
        'USER.EMAIL': 'Email address',
        'USER.LASTNAME': 'Lastname',
        'USER.FIRSTNAME': 'Firstname',
        'USER.OLDPWD': 'Current password',
        'USER.NEWPWD': 'New password',
        'USER.CONFPWD': 'Password confirmation',
        'USER.WRONG_OLD_PWD' : 'The current password is not correct',
        'USER.NEW_PWD_SAME_OLD_PWD' : 'The new password is the same as the previous one',
        'USER.NEW_PWD_NOT_SAME_CONF_PWD' : 'The password confirmation is not correct',
        'USER.PWD_UPDATED' : 'Password has been updated',
        'ERROR.SERVICE_UNVAIBLE': 'Service unvaible',
        'ERROR.WRONG_LOGIN_PASSWORD': 'Wrong login or password',
        'ERROR.INVALID_EMAIL': 'Invalid email',
        'ERROR.ACCESS_DENIED': 'Access denied',
        'ERROR.NOT_FOUND': 'Resource not found',
        '404.TITLE': '404',
        'ERROR': 'Error'
    });
}]);