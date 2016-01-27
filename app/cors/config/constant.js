'use strict';

angular.module('app').constant('CONFIG', {
    appName: 'AppName',
    version: '0.0.1 beta',
    typeAlert: 'alert-header',
    default_language: 'fr_FR',
    show_languages: true,
    login: true,
    rest: 'api', /*firebase | api*/
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
    server: 'http://casper.uscrum.fr',
    clientId: '1_ihhhxzodkogscwowwccwcsws48s84woss4w0cswcowwc0wo4k',
    clientSecret: '4us6ye9e94sgosw0ksskks444o88skwog4kwogc808k4og0kww',
    /*server: 'http://127.0.0.1:8000',
    clientId: '2_2p5l2q0k6yasg0kk0k880o4wgsg04k8kcc0wks844ccsww8w80',
    clientSecret: '425bnnn5y9q8oo80k08ckc8o8040gc8wkskgkckgwokogc8wco',*/
    /*server: 'http://localhost:3000',
    clientId: '0b10ade53787be871ff0232b5bbf3aa8f002542f',
    clientSecret: '3b36588697cb2af9e62b3c59c5994b3b1207705e',*/
    url_token: 'oauth/v2/token',
    grantType: 'password'
}).constant('CONFIG_FIREBASE', {
    server: 'https://apppik.firebaseio.com'
})
.constant('CONFIG_SOCKET', {
    server: 'http://localhost:8080/'
})
;
