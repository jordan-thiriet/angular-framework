var fitnessModule = angular.module('fitnessModule', ['app']).run(['$rootScope', '$timeout', function($rootScope, $timeout) {
    $timeout(function () {
        $rootScope.menus.push(
            {
                title: 'FITNESS.TITLE',
                icon: 'fa fa-heartbeat',
                sref: 'fitness',
                position: 10,
                submenu: [{
                    title: 'FITNESS.GRAPH',
                    icon: 'fa fa-line-chart',
                    sref: 'fitness',
                    position: 1
                },
                {
                    title: 'FITNESS.ADD.TITLE',
                    icon: 'fa fa-tasks',
                    sref: 'fitness-add',
                    position: 2
                }]
            }
        );
    });
}]);
