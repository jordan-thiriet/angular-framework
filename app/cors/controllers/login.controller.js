'use strict';

app
    .controller('LoginController',['$scope', '$state', '$filter', '$rest', '$tools', 'User', '$alert', '$localStore', function ($scope, $state, $filter, $rest, $tools, User, $alert, $localStore) {
        $scope.login = function (username, password) {
            if ($tools.isNotEmpty(username) && $tools.isNotEmpty(password)) {
                $rest.connection(username, password).then(function() {
                    User.init();
                    var lastPage = $localStore.get('last-page');
                    $localStore.remove('last-page');
                    if(lastPage) {
                        $state.go(lastPage);
                    } else {
                        $state.go('home');
                    }
                });
            } else {
                $alert.error($filter('translate')('LOGIN.ERROR.EMPTY_LOGIN_PASSWORD'));
            }
        };
    }]);
