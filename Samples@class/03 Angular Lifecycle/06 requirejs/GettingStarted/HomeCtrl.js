define(["App"], function (myApp) {
    "use strict";

    function HomeCtrl($scope, $injector) {

        $scope.add = function () {
            $injector.get("$http");

            var pt = $injector.instantiate(Point);
        }

        $scope.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    function Point($http, $compile, $parse, $q) {
    }

    //angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
    myApp.controller("HomeCtrl", HomeCtrl);
});
