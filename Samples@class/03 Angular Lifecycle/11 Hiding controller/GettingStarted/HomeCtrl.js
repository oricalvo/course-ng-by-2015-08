(function () {
    "use strict";

    function HomeCtrl($scope, $rootScope) {
        console.log("HomeCtrl created: " + $scope.$id);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

