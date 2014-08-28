var app = angular.module('keepIt', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
        when('/', {
            templateUrl: '/templates/start.html',
            controller: 'start'
        }).
        when('/choose', {
            templateUrl: '/templates/choose.html',
            controller: 'choose'
        }).
        when('/prepare', {
            templateUrl: '/templates/prepare.html',
            controller: 'prepare'
        }).
        otherwise({
            redirectTo: '/error'
        });
    }
]);

app.service('sharedProperties', function() {
    var selectedAlbums = {};

    return {
        getString: function() {
            return stringValue;
        },
        setString: function(value) {
            stringValue = value;
        },
        setObject: function(value) {
            selectedAlbums = value;
        },
        getObject: function() {
            return selectedAlbums;
        }
    }
});