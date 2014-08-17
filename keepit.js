var app = angular.module('keepIt', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
        when('/keepit/', {
            templateUrl: '/keepit/templates/choose.html'
        }).
        when('/keepit/prepare', {
            templateUrl: '/keepit/templates/prepare.html'
        }).
        otherwise({
            redirectTo: '/keepit/'
        });
    }
]);