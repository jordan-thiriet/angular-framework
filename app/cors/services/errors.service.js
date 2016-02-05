'use strict';

/**
 * Service for manage errors
 * @return
 */

app.service('errorsService',['$rootScope', '$filter', 'User', '$alert', function ($rootScope, $filter, User, $alert) {

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
                        $alert.error($filter('translate')('ERROR.INVALID_EMAIL'));
                        break;
                    case 'invalid_user':
                    case 'invalid_password':
                    case 'invalid_grant':
                        $alert.error($filter('translate')('ERROR.WRONG_LOGIN_PASSWORD'));
                        break;
                }
                break;
            case 401:
                switch (message.toLowerCase()) {
                    case 'access_denied':
                        $alert.error($filter('translate')('ERROR.ACCESS_DENIED'));
                        break;
                    case 'invalid_token':
                        User.logout();
                        break;
                }
                break;
            case 404:
                $alert.error($filter('translate')('ERROR.NOT_FOUND'));
                break;
            case 500:
            case 503:
                $alert.error($filter('translate')('ERROR.SERVICE_UNVAIBLE'));
                break;
        }
    }

}]);
