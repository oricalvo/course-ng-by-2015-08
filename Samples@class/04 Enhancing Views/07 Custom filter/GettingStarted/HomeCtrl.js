(function () {
    "use strict";

    function HomeCtrl($scope) {

        $scope.format = 'HH:mm:ss';

        $scope.run = function () {
        }

        $scope.birthday = new Date();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

    angular.module("MyApp").filter("mydate", function () {
        return function (value) {
            return value.getMonth();
        }
    });

})();
