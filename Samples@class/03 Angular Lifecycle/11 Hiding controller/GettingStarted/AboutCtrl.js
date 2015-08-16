(function () {
    "use strict";

    function AboutCtrl($scope, $rootScope) {

        var x = 12;

        console.log("AboutCtrl created: " + $scope.$id);

        $rootScope.$on("contactAdded", function () {
        });

        setInterval(function () {
        }, 1000);
    }

    angular.module("MyApp").controller("AboutCtrl", AboutCtrl);
})();

