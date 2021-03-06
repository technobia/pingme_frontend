/**
 * Created by THANH BINH on 10/17/2015.
 */
require.config({
    'baseUrl': 'app',
    paths:{
        'angular': '../node_modules/angular/angular.min',
        'angular-route': '../node_modules/angular-route/angular-route.min',
        'jquery': '../node_modules/jquery/dist/jquery.min',
        'bootstrap': '../node_modules/bootstrap/dist/js/bootstrap.min',
        'app': 'app',
        'jssor': '../vendor/jssor.slider.min'
    },
    shim:{
        'angular': {
            exports: 'angular'
        },

        'angular-route': {
            deps: [ 'angular' ],
            exports: 'angular-route'
        },

        'jquery': {
            exports: '$'
        },

        'bootstrap': {
            'deps': ['jquery']
        },

        'app': {
            deps: [ 'angular', 'angular-route' ],
            exports: 'app'
        },

        'jssor': {
            deps: ['jquery']
        }
    },
    'deps': ['main', 'angular', 'angular-route', 'jquery', 'bootstrap', 'jssor'],
    'include': ['angular', 'angular-route', 'jquery', 'bootstrap', 'jssor']
});
