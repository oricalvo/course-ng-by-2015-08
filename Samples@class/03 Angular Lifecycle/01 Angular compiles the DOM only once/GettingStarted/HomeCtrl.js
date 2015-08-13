(function () {
    "use strict";

    function HomeCtrl($scope) {

        //$("body").append("{{message}}");

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

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
