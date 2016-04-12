'use strict';

app.service('$settings',['$localStore', '$rest', '$timeout', function($localStore, $rest, $timeout) {


    this.settings = {};

    /**
     * Init settings
     */
    this.init = function() {
        var self = this;

        // When app is loaded
        angular.element(document).ready(function() {
            $timeout(function() {
                self.loadData();
            }, 500);
        });
    };

    /**
     * Load settings from api
     */
    this.loadData = function() {
        var self = this;
        $rest.getOne('settings').then(function (data) {
            if (data.data && data.data.settings) {
                self.setData(data.data.settings);
            }
        });
    };

    /**
     * Set data to settings
     * @param settings
     */
    this.setData = function(settings) {
        var self = this;
        angular.forEach(settings, function (setting, key) {
            if (self.settings[key] !== undefined) {
                var set = {};
                set[key] = setting;
                angular.extend(self.settings, set);
            }
        });
    };

    /**
     * Add settings
     * @param settings
     */
    this.add = function(settings) {
        angular.extend(this.settings, settings);
    };

    /**
     * Save settings
     * @param settings
     */
    this.save = function(settings) {
        this.settings = settings;
    };

    /**
     * Get Settings
     * @returns {*|null|Array}
     */
    this.get = function() {
        return this.settings;
    }

}]);