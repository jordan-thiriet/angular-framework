'use strict';
/**
 * Service to manage connection of backend
 */
app.service('$rest', function(CONFIG, $firebase, $api) {

    this.rest = null;

    /**
     * Init Connection
     */
    this.init = function() {
        this.rest = CONFIG.rest === 'firebase' ? $firebase : $api;
        this.rest.init();
    };

    /**
     * Authentication to connection
     * @param {string} username
     * @param {string} password
     * @returns {*}
     */
    this.connection = function(username, password) {
        return this.rest.connection(username, password);
    };

    /**
     * Return all resource of collection
     * @param {string} path
     * @returns {array}
     */
    this.getAll = function(path) {
        return this.rest.getAll(path);
    };

    /**
     * Return an resource of collection
     * @param {string} path
     * @param {string} key
     * @returns {Object}
     */
    this.getOne = function(path, key) {
        return this.rest.getOne(path, key);
    };


    /**
     * Add an resource to collection
     * @param {string} path
     * @param {object} object
     * @returns {*}
     */
    this.post = function(path, object) {
        return this.rest.post(path, object);
    };

    /**
     * Add an resource to existing collection
     * @param {object} object
     * @returns {*}
     */
    this.add = function(object) {
        return this.rest.add(object);
    };

    /**
     * Save an resource
     * @param {object} object
     * @returns {*}
     */
    this.put = function(object) {
        return this.rest.put(object);
    };

    /**
     * Remove an resource
     * @param {object} object
     * @returns {*}
     */
    this.remove = function(object) {
        return this.rest.remove(object);
    };



});