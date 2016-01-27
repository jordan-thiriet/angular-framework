'use strict';
/**
 * Service for random an array with object item
 */
app.service('$rand',[ function() {


    this.list = null;
    this.oldList = null;
    this.isReinit = true;
    this.currentValue = null;

    /**
     * Init a random service
     * @param {array} list
     * @param {boolean} reinit
     * @returns {boolean}
     */
    this.init = function(list, reinit) {
        if(list.length > 0) {
            this.list = angular.copy(list);
            this.oldList = angular.copy(list);
            this.isReinit = reinit !== undefined ? reinit : true;
            return true;
        } else {
            return false;
        }
    };

    /**
     * Return a element of tabs and remove it of list
     * @returns {*}
     */
    this.next = function() {
        if(this.list.length === 0 && this.isReinit) {
            this.reinit();
        } else if(this.list.length === 0){
            return null;
        }
        var index = Math.floor(Math.random() * this.list.length);
        this.currentValue = angular.copy(this.list[index]);
        this.list.splice(index, 1);
        return this.currentValue;
    };

    /**
     * Return current list
     * @returns {array}
     */
    this.getList = function() {
        return this.list;
    };

    /**
     * Return the current value
     * @returns {object}
     */
    this.getCurrentValue = function() {
        return this.currentValue;
    };

    /**
     * reinit the list with oldlist
     */
    this.reinit = function() {
        this.list = angular.copy(this.oldList);
    };


}]);