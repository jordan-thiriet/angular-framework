'use strict';

app
    .controller('UserEditController',['$rootScope', '$scope', '$rest', 'User', '$alert','$filter', function ($rootScope, $scope, $rest, User, $alert, $filter) {
        $rest.getOne('user',$rootScope.user.id).then(function(data) {
            $scope.userEdit = data.data;
        });

        $scope.save = function() {
            $scope.userEdit.save().then(function() {
                User.updateUser($scope.userEdit);
                $alert.success($filter('translate')('USER.PROFIL_UPDATED'));
            });
        }
    }])
    .controller('UserChangePasswordController',['$rootScope', '$scope', '$rest', 'User', '$alert','$filter', function ($rootScope, $scope, $rest, User, $alert, $filter) {
        $scope.change = function(oldpwd, newpwd, confpwd) {

            if (!User.isSamePassword(oldpwd)) {
                $alert.error($filter('translate')('USER.WRONG_OLD_PWD'));
            } else if (oldpwd === newpwd) {
                $alert.error($filter('translate')('USER.NEW_PWD_SAME_OLD_PWD'));
            } else if(newpwd !== confpwd) {
                $alert.error($filter('translate')('USER.NEW_PWD_NOT_SAME_CONF_PWD'));
            } else {
                $rest.post('user/change-password/'+$rootScope.user.id,{newPwd: newpwd}).then(function() {
                    User.updatePassword(newpwd);
                    $alert.success($filter('translate')('USER.PWD_UPDATED'));
                });
            }
        }
    }])
    .controller('ForgotPasswordController',['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.forgotPassword = function(email) {
            console.log(email);
        };

    }]);