(function () {
    "use strict";

    function AboutCtrl($scope, $location, $window) {
        $scope.back = function () {
            setTimeout(function () {
                $window.history.back();
            });
        }
    }

    angular.module("MyApp").controller("AboutCtrl", AboutCtrl);

})();
