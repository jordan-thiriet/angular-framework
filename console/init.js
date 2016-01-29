'use strict';

var colors = require('colors');
var prompt = require('prompt');
var fs = require('fs');
var replace = require("replace");

var init = {};

init.config = function() {
    if(!fs.existsSync('../app/cors/config/constant.js')) {
        prompt.start();
        var infos = {
            AppName: '',
            Version: '',
            Type: '',
            Server: '',
            ClientId: '',
            ClientSecret: '',
            Firebase: ''
        };
        var schema = {
            properties: {
                AppName: {
                    description: 'App Name',
                    message: 'App Name is require',
                    required: true
                },
                Version: {
                    description: 'Version',
                    message: 'Version is require',
                    required: true
                },
                Type: {
                    message: 'Type must be firebase or api',
                    description: 'Type (firebase | api)',
                    pattern: /^api|firebase$/,
                    required: true
                }
            }
        };
        prompt.get(schema, function (err, result) {
                infos.AppName = result.AppName;
                infos.Version = result.Version;
                infos.Type = result.Type;

                    console.log('Config APP done !'.green);
                    if (result.Type === 'api') {
                        schema = {
                            properties: {
                                Server: {
                                    description: 'Server of rest api'
                                },
                                ClientId: {
                                    description: 'Client Id of rest api'
                                },
                                ClientSecret: {
                                    description: 'Client Secret of rest api'
                                }
                            }
                        };
                        prompt.get(schema, function (err, result) {
                            infos.Server = result.Server;
                            infos.ClientId = result.ClientId;
                            infos.ClientSecret = result.ClientSecret;
                            writeFile(infos);
                            console.log('Config API done !'.green);
                        });
                    } else if (result.Type === 'firebase') {
                        schema = {
                            properties: {
                                Firebase: {
                                    description: 'Url of firebase api'
                                }
                            }
                        };
                        prompt.get(schema, function (err, result) {
                            infos.Firebase = result.Firebase;
                            writeFile(infos);
                            console.log('Config Firebase done !'.green);
                        });
                    }
        });
    } else {
        console.log('Config already defined'.red)
    }


    function writeFile(infos) {
        var stream = fs.createReadStream('../app/cors/pattern/config/constant.dist.js');
        stream.pipe(fs.createWriteStream('../app/cors/config/constant.js'));
        stream.on('close', function () {
            replace({
                regex: /\$appName/g,
                replacement: infos.AppName,
                paths: ['../app/cors/config/'],
                recursive: true,
                silent: true
            });
            replace({
                regex: /\$appVersion/g,
                replacement: infos.Version,
                paths: ['../app/cors/config/'],
                recursive: true,
                silent: true
            });
            replace({
                regex: /\$typeServer/g,
                replacement: infos.Type,
                paths: ['../app/cors/config/'],
                recursive: true,
                silent: true
            });
            replace({
                regex: /\$server/g,
                replacement: infos.Server,
                paths: ['../app/cors/config/'],
                recursive: true,
                silent: true
            });
            replace({
                regex: /\$clientId/g,
                replacement: infos.ClientId,
                paths: ['../app/cors/config/'],
                recursive: true,
                silent: true
            });
            replace({
                regex: /\$clientSecret/g,
                replacement: infos.ClientSecret,
                paths: ['../app/cors/config/'],
                recursive: true,
                silent: true
            });
            replace({
                regex: /\$firebase/g,
                replacement: infos.Firebase,
                paths: ['../app/cors/config/'],
                recursive: true,
                silent: true
            });
        });
    }
};

module.exports = init;