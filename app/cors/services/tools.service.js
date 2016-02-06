'use strict';

app.service('$tools',[ function() {

    /**
     * Load assets in javascript
     * @param {string} filename Path of assets
     * @param {string} filetype Type of assets
     */
    this.loadAssets = function(filename, filetype) {
        var fileref = null;

        if (filetype === 'js'){
            fileref = document.createElement('script');
            fileref.setAttribute("type","text/javascript");
            fileref.setAttribute("src", filename);
        }
        else if (filetype === 'css'){
            fileref=document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", filename);
        }
        else {
            document.getElementsByTagName("head")[0].appendChild(fileref)
        }
    };

    /**
     * Check if value is not empty, null or undefined
     * @param {string} value
     * @returns {boolean}
     */
    this.isNotEmpty = function(value) {
        return angular.isDefined(value) && value !== null && value !== '';
    };


    /**
     * Get timestamp from date
     * @param datestring
     * @returns {number}
     */
    this.getTimestamp= function(datestring) {
        var tmp = datestring.split(' ');

        if(tmp.length !== 2 || tmp[0].split('-').length !== 3 || tmp[1].split(':').length !== 3) {
            return false;
        }

        var tmp_date = tmp[0].split('-');
        var tmp_time = tmp[1].split(':');

        var date = new Date(tmp_date[0],tmp_date[1]-1,tmp_date[2],tmp_time[0],tmp_time[1],tmp_time[2]);
        return date.getTime();
    }

}]);