app.directive('corsMenu',['$state', '$timeout', '$rootScope', 'CONFIG', function($state, $timeout, $rootScope, CONFIG) {
    return {
        restrict: 'E',
        scope: 'menus=',
        templateUrl: 'app/cors/templates/'+CONFIG.theme+'/menu.html',
        link : function (scope) {
            $rootScope.refreshMenu = function(state) {
                scope.menus.map(function(item) {
                    item.actif = state == item.sref;
                    return item;
                });
            };
        }
    };
}]);