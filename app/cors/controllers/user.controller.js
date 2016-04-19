'use strict';

app
    .controller('UserEditController',['$rootScope', '$scope', '$rest', 'User', '$alert','$filter', '$tools', 'Restangular', '$http', function ($rootScope, $scope, $rest, User, $alert, $filter, $tools, Restangular, $http) {

        $scope.myImage='';
        $scope.myCroppedImage = null;
        var changePicture = false;
        
        $rest.getOne('user',$rootScope.user.id).then(function(data) {
            $scope.userEdit = data.data;
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
    }])
    .controller('UserChangePasswordController',['$rootScope', '$scope', '$rest', 'User', '$alert','$filter', '$http', function ($rootScope, $scope, $rest, User, $alert, $filter, $http) {

        $scope.userPwd = {};

        $http({method: 'GET', url: './app/cors/form/change_password.form.json'}).success(function(data) {
            $scope.form = data;
        });

        $scope.save = function() {
            $rest.putObject('user/change-password', {password:$scope.userPwd.newpwd}).then(function() {
                User.updatePassword($scope.userPwd.newpwd);
                $alert.success($filter('translate')('USER.PWD_UPDATED'));
                $scope.userPwd = {};
            });
        }
    }])
    .controller('UserChangeAvatarController',['$scope', '$tools', '$rootScope', '$rest', 'User', function ($scope, $tools, $rootScope, $rest, User) {

        $scope.myImage='';
        $scope.myCroppedImage = null;
        var changePicture = false;

        $tools.imgToBase64($rootScope.urlPublic+'/images/avatar/'+$rootScope.user.id+'.png',function(img) {
            $scope.$apply(function() {
                $scope.myCroppedImage = img;
            });
        },'image/png');

        $scope.save = function() {
            var picture = changePicture ? $scope.myCroppedImage : null;
            $rest.putObject('user/upload-avatar',{picture: picture}).then(function() {
                User.updatePicture();
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
    .controller('ForgotPasswordController',['$scope', '$rest', function ($scope, $rest) {

        $scope.forgotPassword = function(email) {
            $rest.post('public/reset-password',{email: email}).then(function() {
            });
        };

    }]);