app.directive('corsForm',['CONFIG', 'User', function(CONFIG, User) {
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
                var patt = null;
                var translate = null;
                angular.forEach(scope.settings, function(value, key) {
                    if(value.required !== undefined && value.required === true) {
                        value.error = scope.object[key] ? null : 'FORM.REQUIRED';
                        if(value.error !== null) {
                            error = true;
                        }
                    }
                    if(value.type !== undefined) {
                        switch (value.type) {
                            case 'email':
                                patt = new RegExp("^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$");
                                translate = 'ERROR.EMAIL_NOT_VALID';
                                break;
                            case 'number':
                                patt = new RegExp("^[0-9]+$");
                                translate = 'ERROR.NUMBER_NOT_VALID';
                                break;
                        }
                        if(patt && !patt.test(scope.object[key])) {
                            value.error = translate;
                            error = true;
                        }
                    }
                    if (value.validation !== undefined) {
                        if(eval(value.validation.value) === false) {
                            value.error = value.validation.translation;
                            error = true;
                        }
                    } else if (value.regex !== undefined) {
                        if(scope.object[key] !== undefined) {
                            patt = new RegExp(value.regex.value);
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