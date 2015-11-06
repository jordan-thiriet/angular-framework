'use strict';
/**
 * Service to connect at firebase
 */
app.service('$firebase', function($log, $q, errorsService, CONFIG_FIREBASE, $firebaseArray, $firebaseObject, $firebaseAuth, User) {

    this.ref = null;
    this.lastArray = null;

    /**
     * Init firebase
     */
    this.init = function() {
        this.ref = new Firebase(CONFIG_FIREBASE.server);
    };

    /**
     * Authentication simple to firebase
     * @param {string} username
     * @param {string} password
     * @returns {*}
     */
    this.connection = function(username, password) {
        var deferred = $q.defer();
        var auth = $firebaseAuth(this.ref);
        auth.$authWithPassword({
            email    : username,
            password : password
        }).then(function(authData) {
            User.setToken(authData.token, null);
            User.setUser({id: authData.uid,username: authData.password.email,email: authData.password.email});
            deferred.resolve();
        }).catch(function(error) {
            errorsService.getErrors(400, error.code);
            deferred.reject({ message: error });
        });
        return deferred.promise;
    };

    /**
     * Get all resource of collection
     * @param {string } path Path of collection
     * @returns {array}
     */
    this.getAll = function(path) {
        this.lastArray = $firebaseArray(this.ref.child(path));
        return this.lastArray.$loaded();
    };

    /**
     * Get an resource of collection
     * @param {string} path Path of collection
     * @param {string} key Key of item
     * @returns {object}
     */
    this.getOne = function(path, key) {
        return $firebaseObject(this.ref.child(path).child(key)).$loaded();
    };

    /**
     * Add an resource to a new firebaseArray
     * @param {string} path Path of collection
     * @param {object} object Object to add at the collection
     * @returns {array}
     */
    this.post = function(path, object) {
        return $firebaseArray(this.ref.child(path)).$add(object);
    };

    /**
     * Add an resource to a existing firebaseArray
     * @param {object} object
     */
    this.add = function(object) {
        this.lastArray.$add(object);
    };

    /**
     * Save resource
     * @param {object} object
     * @returns {array}
     */
    this.put = function(object) {
        return this.lastArray.$save(object);
    };

    /**
     * Remove resource
     * @param {object} object
     * @returns {array}
     */
    this.remove = function(object) {
        return this.lastArray.$remove(object);
    };
});