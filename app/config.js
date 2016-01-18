/**
 * Created by THANH BINH on 10/17/2015.
 */
define(function() {
    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: true
        });

        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html'
            })
            .when('/dia-diem', {
                templateUrl: 'templates/dia-diem-danh-sach.html'
            })
            .when('/dia-diem/chi-tiet', {
                templateUrl: 'templates/dia-diem-chi-tiet.html'
            })
            .otherwise({
                templateUrl: 'templates/home.html'
            });
    }

    config.$inject = ['$routeProvider', '$locationProvider'];

    return config;
});