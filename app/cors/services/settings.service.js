'use strict';

app.service('$settings',['$localStore', '$rest', function($localStore, $rest) {


    this.settings = null;

    this.init = function() {
        var self = this;
        var settings = $localStore.get('settings');
        $rest.getOne('settings').then(function (data) {
            if(data.data && data.data.settings) {
                angular.extend(self.settings, data.data.settings);
                $localStore.put('settings', self.settings);
            }
        });
        this.settings = settings ? settings : {};
    };

    this.add = function(settings) {
        var self = this;
        angular.forEach(settings, function(setting, key) {
            if(self.settings[key] === undefined) {
                var set = {};
                set[key] = setting;
                angular.extend(self.settings, set);
            }
        });
    };

    this.save = function(settings) {
        this.settings = settings;
        $localStore.put('settings', settings);
    };

    this.get = function() {
        return this.settings;
    }

}]);