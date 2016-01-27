var homeModule = angular.module('homeModule', ['app']).run(['$rootScope', '$timeout', function($rootScope, $timeout) {
    $timeout(function () {
        $rootScope.menus.push(
            {
                title: 'HOME.TITLE',
                icon: 'fa fa-home',
                sref: 'home',
                position: 1
                /*submenu: [{
                    title: 'HOME.TITLE',
                    icon: 'fa fa-heart',
                    sref: 'home',
                    position: 1
                }]*/
            }
        );
    });
}]);
