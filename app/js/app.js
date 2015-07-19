app = angular.module('LoadCentral', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/hello', {
    templateUrl: 'app/helloWorld.html',
    controller: 'HelloController'
  })
  .otherwise({
    redirectTo: '/'
  })
}]);