'use strict';

app
    .controller('LoginController', function ($rootScope, $scope, $state, $filter, $rest, $tools) {
        $rootScope.isLoginPage = true;
        $scope.login = function (username, password) {
            if ($tools.isNotEmpty(username) && $tools.isNotEmpty(password)) {
                $rest.connection(username, password).then(function() {
                    $state.go('home');
                });
            } else {
                $rootScope.alerts.push({type: 'danger', msg: $filter('translate')('LOGIN.ERROR.EMPTY_LOGIN_PASSWORD')});
            }
        };
        $scope.$on('$destroy', function () {
            $rootScope.isLoginPage = false;
        });
    });
