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
        when('/flip', {
            templateUrl: '/templates/flipbook-2.html',
            controller: 'flipbook'
        }).
        otherwise({
            redirectTo: '/error'
        });
    }
]);