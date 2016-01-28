'use strict';

var process = require('process');
var module = require ('./module.js');
var replace = require("replace");
var fs = require("fs");

var mod = null;
var fct = null;

process.argv.forEach(function(val, index, array) {
    if(index > 1) {
        if(val.indexOf(':') > -1) {
            var tmp = val.split(':');
            mod = tmp[0];
            fct = tmp[1];
        }
    }
});


switch (mod) {
    case 'module':
        module[fct]();
        break;
}