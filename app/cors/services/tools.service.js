'use strict';

app.service('$tools', function() {

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




});