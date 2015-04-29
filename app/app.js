var expenseMod = angular.module('ExpenseApp',['ngRoute']);

expenseMod.config(function ($routeProvider) {
    
    'use strict';
    
    $routeProvider
        .when('/', {
            controller: 'ViewOneController',
            templateUrl: './app/views/view1.html'
        })    
        .when('/second', {
            controller: 'ViewTwoController',
            templateUrl: './app/views/view2.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});