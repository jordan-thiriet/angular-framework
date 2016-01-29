'use strict';

var colors = require('colors');
var prompt = require('prompt');
var fs = require('fs');
var ncp = require('ncp').ncp;
var replace = require("replace");

var mod = {};

mod.create = function() {
    prompt.colors = true;
    prompt.start();
    var schema = {
        properties: {
            Name: {
                description: 'Name of module',
                message: 'Invalid or require name',
                pattern: /^[A-Z][a-zA-Z]+$/,
                required: true
            },
            Url: {
                description: 'Slug of module',
                message: 'Invalid or require slug',
                pattern: /^[a-z0-9-]+$/,
                required: true
            },
            Icon: {
                description: 'Icon font awesome (fa-xxx)'
            }
        }
    };
    prompt.get(schema, function (err, result) {
        ncp.limit = 16;

        var module = result.Name;
        var moduleLowerCase = result.Name.toLowerCase();
        var moduleUperCase = result.Name.toUpperCase();
        var moduleUrl = result.Url.toLowerCase();
        var moduleIcon = result.Icon === '' ? 'fa-cubes' : result.Icon;

        ncp('../app/cors/pattern/module', '../app/modules/'+module+'Module', function (err) {
            if (err) {
                return console.error(err);
            }

            // Rename file
            fs.renameSync('../app/modules/'+module+'Module/module.module.js', '../app/modules/'+module+'Module/'+moduleLowerCase+'.module.js');
            fs.renameSync('../app/modules/'+module+'Module/controllers/module_controller.js', '../app/modules/'+module+'Module/controllers/'+moduleLowerCase+'_controller.js');

            // Replace varibale into file
            replace({
                regex: /\$moduleName/g,
                replacement: module,
                paths: ['../app/modules/'+module+'Module/'],
                recursive: true,
                silent: true
            });
            replace({
                regex: /\$moduleLower/g,
                replacement: moduleLowerCase,
                paths: ['../app/modules/'+module+'Module/'],
                recursive: true,
                silent: true
            });
            replace({
                regex: /\$moduleUperCase/g,
                replacement: moduleUperCase,
                paths: ['../app/modules/'+module+'Module/'],
                recursive: true,
                silent: true
            });
            replace({
                regex: /\$moduleUrl/g,
                replacement: moduleUrl,
                paths: ['../app/modules/'+module+'Module/'],
                recursive: true,
                silent: true
            });
            replace({
                regex: /\$moduleIcon/g,
                replacement: moduleIcon,
                paths: ['../app/modules/'+module+'Module/'],
                recursive: true,
                silent: true
            });

            // Write into index.html
            fs.readFile('../index.html','utf8', function(err, data) {
                if (err) throw err;
                data = data.replace('<!-- NewModule -->',
                    '<!-- '+module+'Module -->\n'+
                    '<script src="app/modules/'+module+'Module/'+moduleLowerCase+'.module.js"></script>\n'+
                    '<script src="app/modules/'+module+'Module/config/routes.js"></script>\n'+
                    '<script src="app/modules/'+module+'Module/controllers/'+moduleLowerCase+'_controller.js"></script>\n'+
                    '<script src="app/modules/'+module+'Module/translations/fr_FR.js"></script>\n'+
                    '<script src="app/modules/'+module+'Module/translations/en_EN.js"></script>\n\n' +
                    '<!-- NewModule -->');
                fs.writeFile('../index.html', data, 'utf8', function (err) {
                    if (err) return console.log(err);
                });
                // Write into app.js
                fs.readFile('../app.js','utf8', function(err, data) {
                    if (err) throw err;
                    data = data.replace('//InsertNewModule',
                        "'"+moduleLowerCase+"Module',\n"+
                        '\t\t//InsertNewModule');
                    fs.writeFile('../app.js', data, 'utf8', function (err) {
                        if (err) return console.log(err);
                    });
                    console.log('Module has been created!'.green);
                });
            });
        });
    });
};

module.exports = mod;