define(["App"], function (myApp) {
    "use strict";

    function HomeCtrl($scope, $injector, $rootScope) {

        $rootScope.message = "X";

        $scope.add = function () {
            setTimeout(function () {
                $scope.contacts.push({ id: -1, name: "Udi" });
                $rootScope.message = "Y";

                //$scope.$apply();
                $scope.$digest();
            }, 1000);
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
