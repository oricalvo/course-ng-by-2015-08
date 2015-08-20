(function () {
    "use strict";

    function HomeCtrl($scope) {
        $scope.clockFormat = "HH:mm:ss";

        $scope.onClockTick = function (time) {
            console.log("Tick: " + time);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
