var fitnessModule = angular.module('fitnessModule', ['app']).run(['$rootScope', '$timeout', '$settings', function($rootScope, $timeout, $settings) {
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

        var settings = {
            fitness_type: {
                value: 'Kg',
                translation: 'FITNESS.TYPE',
                type: 'select',
                lists: ['Kg', 'Lbs']
            }
        };

        $settings.add(settings);
    });
}]);
