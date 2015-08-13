(function () {
    "use strict";

    //HomeCtrl.$inject = ["$scope", "$http", "$compile", "$parse"];
    function HomeCtrl($scope, $http, $compile, $parse) {

        $scope.message = "Hello Angular";

        $scope.add = function () {
            if (!$scope.name) {
                return;
            }

            var contact = {
                id: -1,
                name: $scope.name
            };

            $scope.contacts.push(contact);
        }

        $scope.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    angular.module("MyApp").controller("HomeCtrl",
        [
            "$scope",
            "$http",
            "$compile",
            "$parse",
            HomeCtrl
        ]);
})();
