(function () {
    "use strict";

    function HomeCtrl($scope) {
        $scope.email = "<h1>Alert</h1>";
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
