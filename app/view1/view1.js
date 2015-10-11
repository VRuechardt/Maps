'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

    $scope.map = new Datamap({
        element: document.getElementById('container'), 
        geographyConfig: {
            popupOnHover: false
        },
        fills: {
            defaultFill: '#90C3D4'
        }
    });
    $scope.map.labels();

}]);