(function () {
    "use strict";

    function HomeCtrl($scope) {
        $scope.message = "Hello Angular";
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
