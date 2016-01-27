module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            angulr: {
                src: 'index.html',
                dest: 'index.angulr.html'
            },
            dist: {
                src: ['dist/dist/index.html'],
                dest: 'dist/'
            }
        },
        useminPrepare: {
            html: 'index.html',
            options: {
                dest: '.'
            }
        },
        usemin: {
            html: 'index.angulr.html'
        },
        clean: {
            angulr: ['angulr', 'dist'],
            dir: ['.tmp']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build:angulr', [
        'clean:angulr',
        'copy:angulr',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'usemin:html',
        'clean:dir'
    ]);
};