'use strict';

app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('en_EN', {
        'LOGIN.LOGIN': 'Login',
        'LOGIN.USERNAME': 'Username',
        'LOGIN.PASSWORD': 'Password',
        'LOGIN.ERROR.WRONG_LOGIN_PASSWORD': 'Wrong username or password',
        'LOGIN.ERROR.EMPTY_LOGIN_PASSWORD': 'Username and password cannot be empty',
        'LOGIN.ERROR.EMPTY_PASSWORD': 'Password cannot be empty',
        'USER.LOGOUT': 'Logout',
        'USER.LOCK': 'Lock',
        'ERROR.SERVICE_UNVAIBLE': 'Service unvaible',
        'ERROR.WRONG_LOGIN_PASSWORD': 'Wrong login or password',
        'ERROR.INVALID_EMAIL': 'Invalid email',
        'ERROR.ACCESS_DENIED': 'Access denied',
        '404.TITLE': '404',
        'ERROR': 'Error'
    });
}]);