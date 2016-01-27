'use strict';

/**
 * Service of Managae storage in browser
 * @return
 */

app.service('$localStore',[ function() {

  /**
   * Add an item to localStore
   * @param {string} key
   * @param {string} value
   * @returns {boolean}
   */
  this.put = function(key, value) {
    if (value)
      return localStorage.setItem(key, JSON.stringify(value));
    else
      return false;
  };

  /**
   * Get an item of localStore
   * @param {string} key
   * @returns {*}
   */
  this.get = function(key) {
    return JSON.parse(localStorage.getItem(key));
  };

  /**
   * remove an item of localStore
   * @param {string} key
   * @returns {boolean}
   */
  this.remove = function(key) {
    return localStorage.removeItem(key);
  };

  /**
   * Clear the localStore
   * @returns {*}
   */
  this.clear = function() {
    return localStorage.clear();
  };
}]);
