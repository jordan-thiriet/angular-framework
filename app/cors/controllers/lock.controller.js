'use strict';

app
    .controller('LockController',['$rootScope', '$scope', '$state', '$filter', '$tools', 'User', '$alert', function ($rootScope, $scope, $state, $filter, $tools, User, $alert) {
        $rootScope.showHeader = false;
        $rootScope.showFooter = false;
        $scope.unlock = function (password) {
            if ($tools.isNotEmpty(password)) {
                if(User.isSamePassword(password)) {
                    $state.go('home');
                } else {
                    $alert.error($filter('translate')('LOGIN.ERROR.TEST'));
                }
            } else {
                $alert.error($filter('translate')('LOGIN.ERROR.EMPTY_PASSWORD'));
            }
        };
        $scope.$on('$destroy', function () {
            $rootScope.showHeader = true;
            $rootScope.showFooter = true;
        });
    }]);
