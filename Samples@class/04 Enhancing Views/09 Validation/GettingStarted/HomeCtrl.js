(function () {
    "use strict";

    function HomeCtrl($scope) {

        $scope.save = function () {
            console.log("VALID: " + $scope.form.$valid);

            if (!$scope.form.$valid) {
                return;
            }
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
