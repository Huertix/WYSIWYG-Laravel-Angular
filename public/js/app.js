var myApp = angular.module('myApp', ['ngRoute','textAngular','ngAnimate']);

myApp.config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html'
        });
        
        $routeProvider.when('/logout', {
            templateUrl: 'views/logout.html',
            controller: 'userController',
            authenticated: true
        });

        $routeProvider.otherwise('/');
    }
]);
//# sourceMappingURL=app.js.map
