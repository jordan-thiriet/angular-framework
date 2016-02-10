'use strict';

app
    .controller('LoginController',['$rootScope', '$scope', '$state', '$filter', '$rest', '$tools', 'User', '$alert', function ($rootScope, $scope, $state, $filter, $rest, $tools, User, $alert) {
        $scope.login = function (username, password) {
            if ($tools.isNotEmpty(username) && $tools.isNotEmpty(password)) {
                $rest.connection(username, password).then(function() {
                    User.init();
                    $state.go('home');
                });
            } else {
                $alert.error($filter('translate')('LOGIN.ERROR.EMPTY_LOGIN_PASSWORD'));
            }
        };
    }]);
