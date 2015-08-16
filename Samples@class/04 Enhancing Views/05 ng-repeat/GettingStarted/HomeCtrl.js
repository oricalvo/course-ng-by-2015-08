(function () {
    "use strict";

    function HomeCtrl($scope) {

        $scope.run = function () {
            console.table($scope.contacts);
        }

        var ori = { id: 1, name: "Ori" };

        $scope.nums = [1, 2, 3, 3];
        $scope.contacts = [
            ori,
            { id: 2, name: "Roni" },
            ori,
        ];
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
