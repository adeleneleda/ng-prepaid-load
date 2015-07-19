app = angular.module('LoadCentral');

app.controller('LoadController', ['$scope', function($scope) {
  $scope.transactions = [];
  $scope.showMessage = false;

  $scope.successNumber = null;
  $scope.successAmount = null;

  $scope.load = function(number, amount) {
    if(typeof(number) !== 'undefined' && number != '') {
      $scope.transactions.push({ number: number, amount: amount });
      
      $scope.successNumber = number;
      $scope.successAmount = amount;
      $scope.showMessage = true;

      $scope.cellPhoneNumber100 = '';
    } else {
      $scope.showMessage = false;
    }
  };
}]);