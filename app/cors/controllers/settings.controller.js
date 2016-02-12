'use strict';

app
    .controller('SettingsController',['$scope', '$settings', '$rest', '$alert', '$filter', function ($scope, $settings, $rest, $alert, $filter) {

        $scope.settings = $settings.get();

        $scope.types = {
            select: 'select'
        };

        $scope.save = function() {
            $rest.post('settings', {settings: $scope.settings}).then(function() {
                $settings.save($scope.settings);
                $alert.success($filter('translate')('USER.SETTINGS_SAVED'));
                return true;
            });
        }
    }]);
