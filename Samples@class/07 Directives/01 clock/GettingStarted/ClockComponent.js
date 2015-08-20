(function () {
    "use strict";

    function ClockController($scope, $attrs, $interval) {
        $scope.time = new Date();
        $scope.format = 'dd/MM/yyyy';

        if ($attrs.name) {
            $scope.$parent[$attrs.name] = {
                start: start,
                stop: stop,
            };
        }

        if ($attrs.format) {
            $scope.$parent.$watch($attrs.format, function (newValue) {
                $scope.format = newValue;
            });
        }

        var intervalId = null;

        function start() {
            if (intervalId) {
                return;
            }

            intervalId = $interval(function () {
                $scope.time = new Date();

                $scope.onTick({ time: $scope.time });
            }, 1000);
        }

        function stop() {
            if (intervalId) {
                $interval.cancel(intervalId);
                intervalId = null;
            }
        }

        start();
    }

    angular.module("MyApp").directive("clock", function () {
        return {
            templateUrl: "/Clock.html",
            controller: ClockController,
            scope: {
                //format: "=",
                onTick: "&",
                //onStarted: "&",
            },
        };
    });
})();
