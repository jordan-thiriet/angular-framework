'use strict';

/**
 * Service for manage errors
 * @return
 */

app.service('errorsService', function ($rootScope, $filter, User) {

    /**
     * Init of alerts
     */
    this.init = function () {
        $rootScope.alerts = [];
        $rootScope.closeAlert = function () {
            $rootScope.alerts = [];
        };
    };

    /**
     * get errors with codes and message
     * @param {int} status
     * @param {string} message
     */
    this.getErrors = function (status, message) {
        switch (status) {
            case 400:
                switch (message.toLowerCase()) {
                    case 'invalid_email':
                        $rootScope.alerts.push({
                            type: 'danger',
                            msg: $filter('translate')('ERROR.INVALID_EMAIL')
                        });
                        break;
                    case 'invalid_user':
                    case 'invalid_password':
                    case 'invalid_grant':
                        $rootScope.alerts.push({
                            type: 'danger',
                            msg: $filter('translate')('ERROR.WRONG_LOGIN_PASSWORD')
                        });
                        break;
                }
                break;
            case 401:
                switch (message.toLowerCase()) {
                    case 'access_denied':
                        $rootScope.alerts.push({
                            type: 'danger',
                            msg: $filter('translate')('ERROR.ACCESS_DENIED')
                        });
                        break;
                    case 'invalid_token':
                        User.logout();
                        break;
                }
                break;
            case 500:
                $rootScope.alerts.push({type: 'danger', msg: $filter('translate')('ERROR.SERVICE_UNVAIBLE')});
                break;
        }
    }

});
