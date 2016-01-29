'use strict';

angular.module('app').constant('CONFIG', {
    appName: '$appName',
    version: '$appVersion',
    default_language: 'fr_FR',
    show_languages: true,
    login: true,
    rest: '$typeServer', /*firebase | api*/
    theme: 'angulr', /* angulr*/
    languages: [
        {
            code: 'fr_FR',
            name: 'Français'
        },
        {
            code: 'en_EN',
            name: 'English'
        }
    ],
    chartColor : {
        primary: '#7266ba',
        info:    '#23b7e5',
        success: '#27c24c',
        warning: '#fad733',
        danger:  '#f05050',
        light:   '#e8eff0',
        dark:    '#3a3f51',
        black:   '#1c2b36'
    }
}).constant('CONFIG_REST', {
    server: '$server',
    clientId: '$clientId',
    clientSecret: '$clientSecret',
    url_token: 'oauth/v2/token',
    grantType: 'password'
}).constant('CONFIG_FIREBASE', {
    server: '$firebase'
})
.constant('CONFIG_SOCKET', {
    server: 'http://localhost:8080/'
})
;
