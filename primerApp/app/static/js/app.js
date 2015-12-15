    var app = angular.module('primerApp', ['ngResource', 'ngRoute']);

    app.factory('personaResource', function ($resource) {
        return $resource('/personas/:id', {id:'@id'},
        {
          'get':    {method:'GET', isArray:false},
          'save':   {method:'POST'},
          'update': {method:'PATCH'},
          'query':  {method:'GET', isArray:true},
          'remove': {method:'DELETE'},
          'delete': {method:'DELETE'}
        });
    });

    app.controller('personaController', function($scope, personaResource){
        // obtiene las personas
        function getPersonas(){
            personaResource.query({}, function(data){
                $scope.personas = data;
            });
        };
        getPersonas();


    });

    app.controller('persona1Controller', function($scope, personaResource, $routeParams){
        function getPersonasOne(){
            personaResource.get({id : $routeParams.id }, function(data){
                $scope.persona1 = data;
            });
        };
        getPersonasOne();
    });

    app.config(function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl : 'templates/personas.html',
            controller  : 'personaController'
        })
        .when('/persona/:id', {
            templateUrl : 'templates/personas_detalle.html',
            controller  : 'persona1Controller'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
