'use strict';

app
    .controller('languageController',['$scope', 'translationService', '$rootScope', function ($scope, translationService, $rootScope) {

        $scope.languages = translationService.getLanguages();

        $scope.currentLanguage = translationService.getCurrentLanguage();

        $scope.isShowLanguage = translationService.isShow();

        $scope.changeLanguage = function(code) {
            $scope.currentLanguage = translationService.changeLanguage(code);
            $rootScope.$broadcast('changeLanguage', code);
        };

    }]);