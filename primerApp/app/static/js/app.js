    var app = angular.module('primerApp', ['ngRoute']);

    app.controller('personaController', function($scope){
        $scope.name = "Mauro Calviño";
    });

    app.config(function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl : 'templates/personas.html',
            controller  : 'personaController'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
