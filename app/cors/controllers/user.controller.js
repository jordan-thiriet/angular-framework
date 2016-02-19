'use strict';

app
    .controller('UserEditController',['$rootScope', '$scope', '$rest', 'User', '$alert','$filter', 'Restangular', function ($rootScope, $scope, $rest, User, $alert, $filter, Restangular) {

        $scope.myImage='';
        $scope.myCroppedImage = null;
        var changePicture = false;

        $rest.getOne('user',$rootScope.user.id).then(function(data) {
            $scope.userEdit = data.data;
        });

        $scope.save = function() {
            $scope.userEdit.picture = changePicture ? $scope.myCroppedImage : null;
            $scope.userEdit.save().then(function() {
                User.updateUser($scope.userEdit);
                $alert.success($filter('translate')('USER.PROFIL_UPDATED'));
            });
        };

        var handleFileSelect=function(evt) {
            var file=evt.currentTarget.files[0];
            var fd = new FormData();
            fd.append('file', file);
            var reader = new FileReader();
            reader.onload = function (evt) {
                changePicture = true;
                $scope.$apply(function($scope){
                    $scope.myImage=evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
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
    .controller('ForgotPasswordController',['$scope', '$rest', function ($scope, $rest) {

        $scope.forgotPassword = function(email) {
            $rest.post('public/reset-password',{email: email}).then(function() {
            });
        };

    }]);