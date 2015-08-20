(function () {
    "use strict";

    function OptionsCtrl($scope, $location, $attrs) {

        $scope.stateName = $attrs.stateName;

        $scope.option = $scope.getState($scope.stateName, "option");

        $scope.setState = function (key, value) {
            $scope.$parent.setState($attrs.stateName, key, value);

            $location.replace();
        }
    }

    angular.module("MyApp").controller("OptionsCtrl", OptionsCtrl);

})();
