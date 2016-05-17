var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {templateUrl: 'angular/templates/index.html', controller: 'UsersController'})
            .when('/cadastro', {templateUrl: 'angular/templates/cadastro.html', controller: 'UsersController'})
});