(function () {
    "use strict";

    function HomeCtrl($scope, contactService, dateFormat) {

        $scope.message = "Hello Angular";

        $scope.add = function () {
            if (!$scope.name) {
                return;
            }

            var contact = {
                id: -1,
                name: $scope.name
            };

            contactService.add(contact);
        }

        $scope.contacts = contactService.getAll();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
