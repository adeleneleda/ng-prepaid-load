app = angular.module('LoadCentral');

app.controller('HelloController', ['$scope', function($scope) {
  $scope.message = "Say something!";

  $scope.sayHello = function() {
    $scope.message = 'Hello World!';
  };
}]);