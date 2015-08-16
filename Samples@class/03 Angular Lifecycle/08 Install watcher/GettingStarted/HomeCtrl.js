define(["App"], function (myApp) {
    "use strict";

    function HomeCtrl($scope, $injector, $rootScope) {

        $scope.data = 1;

        $scope.change = function () {
            ++$scope.data;
        }

        $scope.$watch("data",
            function (newValue, oldValue) {
                if (newValue == oldValue) {
                    return;
                }

                console.log(oldValue + " --> " + newValue);
            });

        //$scope.$watch(
        //    function () {
        //        return data;
        //    },
        //    function (newValue, oldValue) {
        //        if (newValue == oldValue) {
        //            return;
        //        }

        //        console.log(oldValue + " --> " + newValue);
        //    });
    }

    myApp.controller("HomeCtrl", HomeCtrl);
});
