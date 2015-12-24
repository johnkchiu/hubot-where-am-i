'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        eslint: {
            target: ['.']
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    require: 'coffee-script'
                },
                src: ['test/**/*.coffee', 'test/**/*.js']
            }
        },
        release: {
            options: {
                tagName: 'v<%= version %>',
                commitMessage: 'Prepared to release <%= version %>.'
            }
        },
        watch: {
            files: ['Gruntfile.js', 'src/**/*.coffee', 'src/**/*.js', 'test/**/*.coffee', 'test/**/*.js'],
            tasks: ['test']
        }
    });

    // load all grunt tasks
    require('matchdep').filterDev(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);

    grunt.registerTask('lint', ['eslint']);
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('test:watch', ['watch']);
    grunt.registerTask('default', ['lint', 'test']);
};
