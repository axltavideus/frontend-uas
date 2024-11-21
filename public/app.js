// public/app.js
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/shop', {
            templateUrl: 'views/shop.html'
        })
        .when('/sustainable', {
            templateUrl: 'views/sustainable.html'
        })
        .when('/fashion', {
            templateUrl: 'views/fashion.html'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);