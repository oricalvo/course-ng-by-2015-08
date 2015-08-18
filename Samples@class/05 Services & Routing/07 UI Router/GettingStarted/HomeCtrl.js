(function () {
    "use strict";

    function HomeCtrl($scope, $location) {
        $scope.goto = function () {
            //alert("Hello");
            $location.url("/#about");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
