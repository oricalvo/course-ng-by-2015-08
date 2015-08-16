define(["App"], function (myApp) {
    "use strict";

    function HomeCtrl($scope, $injector, $rootScope) {

        $scope.data = [{ name: "1" }, { name: "2" }];

        $scope.change = function () {
            //$scope.data.push(1);
            //$scope.data[1] = "X";
            $scope.data[1].name = "X";
        }

        //$scope.$watchCollection("data",
        //    function (newValue, oldValue) {
        //        if (newValue == oldValue) {
        //            return;
        //        }

        //        console.log(oldValue + " --> " + newValue);
        //    });

        $scope.$watch("data",
            function (newValue, oldValue) {
                if (newValue == oldValue) {
                    return;
                }

                console.log(oldValue + " --> " + newValue);
            }, true);
    }

    myApp.controller("HomeCtrl", HomeCtrl);
});
