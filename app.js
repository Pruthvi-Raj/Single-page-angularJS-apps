(function () {
'use strict';
angular.module('NameCalculator',[])

/*.controller("MyFirstController", function ($scope) {
  //$scope.name = "Pruthvi";
});*/

.controller("NameCalculatorController", function($scope,$filter){
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.valueDisplay = function () {
    var totalNameValue = calculateNumericForString($scope.name);
    //  var totalNameValue = 0;
  //  totalNameValue = $scope.totalValue + 1;
    $scope.totalValue = totalNameValue;
  };
  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
  }

  $scope.valueDisplay2 = function () {
    var totalNameValue = calculateNumericForString2($scope.name);
    //  var totalNameValue = 0;
  //  totalNameValue = $scope.totalValue + 1;
    $scope.totalValue = totalNameValue;
  };
  function calculateNumericForString2(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
  }

  $scope.upper = function() {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

});

})();
