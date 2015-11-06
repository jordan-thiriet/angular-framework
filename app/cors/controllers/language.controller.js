'use strict';

app
    .controller('languageController', function ($scope, translationService) {

        $scope.languages = translationService.getLanguages();

        $scope.currentLanguage = translationService.getCurrentLanguage();

        $scope.isShowLanguage = translationService.isShow();

        $scope.changeLanguage = function(code) {
            $scope.currentLanguage = translationService.changeLanguage(code);
        };

    });