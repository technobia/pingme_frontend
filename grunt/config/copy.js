/**
 * Created by VS9 X64Bit on 01/17/16.
 */
module.exports = function(grunt) {
    'use strict';
    return {
        'js': {
            expand: true,
            src: 'app/**',
            dest: 'build/'
        },
        'plugin': {
            expand : true,
            dest   : 'build/',
            src    : [
                '!node_modules/**/*.min.js',
                '!node_modules/grunt/',
                '!node_modules/grunt-*/'
            ]
        }
    };
};
