app.directive('corsForm',['CONFIG', function(CONFIG) {
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
                var error = false;
                angular.forEach(scope.settings, function(value, key) {
                    if(value.required !== undefined && value.required === true) {
                        value.error = scope.object[key] ? null : 'FORM.REQUIRED';
                        if(value.error !== null) {
                            error = true;
                        }
                    }
                    if(value.regex !== undefined) {
                        if(scope.object[key] !== undefined) {
                            var patt = new RegExp(value.regex.value);
                            if(!patt.test(scope.object[key])) {
                                value.error = value.regex.translation;
                                error = true;
                            }
                        }
                    }
                });
                if(!error) {
                    scope.save();
                }
            };
        }
    };
}]);