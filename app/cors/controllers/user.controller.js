'use strict';

app
    .controller('UserEditController',['$rootScope', '$scope', '$rest', 'User', '$alert','$filter', '$tools', 'Restangular', '$http', function ($rootScope, $scope, $rest, User, $alert, $filter, $tools, Restangular, $http) {

        $scope.myImage='';
        $scope.myCroppedImage = null;
        var changePicture = false;
        
        $rest.getOne('user',$rootScope.user.id).then(function(data) {
            $scope.userEdit = data.data;
            $tools.imgToBase64($rootScope.urlPublic+'/pictures/'+$scope.userEdit.id+'.png',function(img) {
                $scope.$apply(function() {
                    $scope.myCroppedImage = img;
                });
            },'image/png');
        });

        $http({method: 'GET', url: './app/cors/form/user_edit.form.json'}).success(function(data) {
            $scope.form = data;
        });

        $scope.save = function() {
            $scope.userEdit.picture = changePicture ? $scope.myCroppedImage : null;
            $rest.putObject('user/'+$scope.userEdit.id,{user: {
                lastname:$scope.userEdit.lastname,
                firstname: $scope.userEdit.firstname,
                username: $scope.userEdit.username,
                email:$scope.userEdit.email
            }}).then(function() {
                User.updateUser($scope.userEdit);
                $alert.success($filter('translate')('USER.PROFIL_UPDATED'));
            });
        };

        /*var handleFileSelect=function(evt) {
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
        angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);*/
    }])
    .controller('UserChangePasswordController',['$rootScope', '$scope', '$rest', 'User', '$alert','$filter', 'Restangular', function ($rootScope, $scope, $rest, User, $alert, $filter, Restangular) {
        $scope.change = function(oldpwd, newpwd, confpwd) {

            if (!User.isSamePassword(oldpwd)) {
                $alert.error($filter('translate')('USER.WRONG_OLD_PWD'));
            } else if (oldpwd === newpwd) {
                $alert.error($filter('translate')('USER.NEW_PWD_SAME_OLD_PWD'));
            } else if(newpwd !== confpwd) {
                $alert.error($filter('translate')('USER.NEW_PWD_NOT_SAME_CONF_PWD'));
            } else {
                $rest.putObject('user/change-password', {password:newpwd}).then(function(data) {
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