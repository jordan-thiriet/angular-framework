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
    this.getTimestamp = function(datestring) {
        var date = this.stringToDate(datestring);
        return date ? date.getTime() : date;
    };

    /**
     * Get datetime from a string
     * @param datestring
     * @returns {*}
     */
    this.stringToDate = function(datestring) {
        var tmp = datestring.split(' ');
        var date,tmp_date = null;

        if(tmp.length !== 2 || (tmp[0].split('-').length !== 3 && tmp[0].split('/').length !== 3) || tmp[1].split(':').length !== 3) {
            return false;
        }

        var tmp_time = tmp[1].split(':');

        if(tmp[0].split('-').length === 3) {
            tmp_date = tmp[0].split('-');
            date = new Date(tmp_date[0],tmp_date[1]-1,tmp_date[2],tmp_time[0],tmp_time[1],tmp_time[2]);

        } else if(tmp[0].split('/').length === 3) {
            tmp_date = tmp[0].split('/');
            date = new Date(tmp_date[2],tmp_date[1]-1,tmp_date[0],tmp_time[0],tmp_time[1],tmp_time[2]);
        }

        return date;
    };

    /**
     * Convert url image to base64
     * @param url
     * @param callback
     * @param outputFormat possible format image/png, image/jpeg, image/jpg, image/gif, image/bmp, image/tiff, image/x-icon, image/svg+xml, image/webp, image/xxx
     */
    this.imgToBase64 = function(url, callback, outputFormat) {
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function(){
            var canvas = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');
            var dataURL;
            canvas.height = this.height;
            canvas.width = this.width;
            ctx.drawImage(this, 0, 0);
            dataURL = canvas.toDataURL(outputFormat);
            callback(dataURL);
            canvas = null;
        };
        img.src = url;
    };

}]);