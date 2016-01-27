'use strict';
/**
 * Service to connect at REST api
 */
app.service('$api',['Restangular', '$log', '$q', 'errorsService', 'CONFIG_REST', 'User', '$http' ,function(Restangular, $log, $q, errorsService, CONFIG_REST, User, $http) {

    /**
     * Init api restangular
     */
    this.init = function() {
        Restangular.setBaseUrl(CONFIG_REST.server);
        Restangular.setFullResponse(true);
        Restangular.setDefaultHeaders({"Content-Type": "application/json"});
        Restangular.setErrorInterceptor(function (response) {
            $log.error(response);
            errorsService.getErrors(response.status, response.data.error);
            return false; // error not handled
        });
    };

    /**
     * Oauth connection
     * @param {string} username
     * @param {string} password
     * @returns {*}
     */
    this.connection = function(username, password) {
        var deferred = $q.defer();
        var that = this;
        var query = {
            client_id: CONFIG_REST.clientId,
            client_secret: CONFIG_REST.clientSecret,
            username: username,
            password: password,
            grant_type: CONFIG_REST.grantType
        };
        Restangular.one(CONFIG_REST.url_token).get(query).then(function(response) {
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
            User.setToken(response.data.access_token, response.data.refresh_token);
            that.getOne('user',null).then(function(response) {
                User.setUser(response.data, password);
                deferred.resolve();
            });
        });
        return deferred.promise;
    };

    /**
     * return all resource of collection
     * @param {string} path
     * @returns {array}
     */
    this.getAll = function(path) {
        return Restangular.all('api/'+path).getList();
    };

    /**
     * return one resource
     * @param {string} path
     * @param {string} key
     * @returns {object}
     */
    this.getOne = function(path, key) {
        return Restangular.one('api/'+path, key).get();
    };

    /**
     * Add resource with method post on collection
     * @param {string} path
     * @param {object} object
     * @returns {object}
     */
    this.post = function(path, object) {
        return Restangular.all(path).post(object);
    };

    /**
     * No action for the moment
     * @TODO
     */
    this.add = function(object) {
        return null;
    };

    /**
     * Save ressource with method PUT
     * @param {object} object
     * @returns {object}
     */
    this.put = function(object) {
        return object.put();
    };

    /**
     * Remove resource with method DELETE
     * @param {string} object
     * @returns {*}
     */
    this.remove = function(object) {
        return object.remove();
    };



}]);