var $moduleLowerModule = angular.module('$moduleLowerModule', ['app']).run(['$rootScope', '$timeout', function($rootScope, $timeout) {
    $timeout(function () {
        $rootScope.menus.push(
            {
                title: '$moduleUperCase.TITLE',
                icon: 'fa $moduleIcon',
                sref: '$moduleLower',
                position: 10
            }
        );
    });
}]);
