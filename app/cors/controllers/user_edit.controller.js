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
}]);