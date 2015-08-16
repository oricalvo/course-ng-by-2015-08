(function () {
    "use strict";

    function HomeCtrl($scope) {
        var urls = ["form1.html", "form2.html", "form3.html"];
        var current = 0;

        $scope.url = urls[current];

        $scope.next = function () {
            $scope.url = urls[++current % 3];
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
