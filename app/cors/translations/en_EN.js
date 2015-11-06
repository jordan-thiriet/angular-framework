'use strict';

app.config(function($translateProvider) {
    $translateProvider.translations('en_EN', {
        'LOGIN.LOGIN': 'Login',
        'LOGIN.USERNAME': 'Username',
        'LOGIN.PASSWORD': 'Password',
        'LOGIN.ERROR.WRONG_LOGIN_PASSWORD': 'Wrong username or password',
        'LOGIN.ERROR.EMPTY_LOGIN_PASSWORD': 'Username and password cannot be empty',
        'ERROR.SERVICE_UNVAIBLE': 'Service unvaible',
        'ERROR.WRONG_LOGIN_PASSWORD': 'Wrong login or password',
        'ERROR.INVALID_EMAIL': 'Invalid email',
        'ERROR.ACCESS_DENIED': 'Access denied',
        '404.TITLE': 'Oupps, 404 Not Found',
        '404.DESC': 'Sorry, an error has occured, Requested page not found!'
    });
});