app.directive('corsForm',['CONFIG', function(CONFIG) {
    return {
        restrict: 'E',
        scope: 'settings=',
        templateUrl: 'app/cors/templates/'+CONFIG.theme+'/form.html',
        link : function (scope) {
            
        }
    };
}]);