app.directive('corsForm',['CONFIG', '$alert', '$filter', function(CONFIG, $alert, $filter) {
    return {
        restrict: 'E',
        scope: {
            settings: '=',
            object: '=',
            save: '='
        },
        templateUrl: 'app/cors/templates/'+CONFIG.theme+'/form.html',
        link : function (scope) {
            scope.saveForm = function () {
                angular.forEach(scope.settings, function(value, key) {
                    if(value.required !== undefined && value.required === true) {
                        value.error = scope.object[key] === undefined ? 'FORM.REQUIRED' : null;
                    }
                    if(value.regex !== undefined) {
                        if(scope.object[key] !== undefined) {
                            var patt = new RegExp(value.regex.value);
                            if(!patt.test(scope.object[key])) {
                                value.error = value.regex.translation;
                            }
                        }
                    }
                });
            };
        }
    };
}]);