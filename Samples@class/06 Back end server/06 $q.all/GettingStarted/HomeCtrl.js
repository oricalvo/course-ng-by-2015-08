(function () {
    "use strict";

    function HomeCtrl($scope, contactService) {

        $scope.getData = function () {
            contactService.getAll()
                .then(function (contacts) {
                    $scope.contacts = contacts;
                })
                .catch(function () {
                    console.log("ERROR");
                });
        }

        $scope.contacts = [];
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
