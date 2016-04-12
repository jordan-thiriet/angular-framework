'use strict';

app
    .controller('SettingsController',['$scope', '$settings', '$rest', '$alert', '$filter', '$rootScope', function ($scope, $settings, $rest, $alert, $filter, $rootScope) {

        $scope.settings = $settings.get();

        $scope.object = {
            fitness_type: "Kg",
            fitness_test: "test"
        };

        $rest.getOne('settings').then(function (data) {
            $scope.object = data.data.settings;

            console.log($scope.object);
        });

        $rootScope.saveTest = function() {
            $rest.post('settings', {settings: $scope.object}).then(function() {
                $settings.save($scope.settings);
                $alert.success($filter('translate')('USER.SETTINGS_SAVED'));
                return true;
            });
        }
    }]);
