var app = angular.module('keepIt', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
        when('/keepit/', {
            templateUrl: '/keepit/templates/start.html',
            controller: 'start'
        }).
        when('/keepit/choose', {
            templateUrl: '/keepit/templates/choose.html',
            controller: 'choose'
        }).
        when('/keepit/prepare', {
            templateUrl: '/keepit/templates/prepare.html',
            controller: 'prepare'
        }).
        otherwise({
            redirectTo: '/keepit/error'
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