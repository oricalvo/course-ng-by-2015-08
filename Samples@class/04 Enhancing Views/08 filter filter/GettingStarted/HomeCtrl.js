(function () {
    "use strict";

    function HomeCtrl($scope) {

        var originalContacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        $scope.run = function () {
            console.table($scope.contacts);
        }

        $scope.contacts = originalContacts;

        $scope.runSearch = function (searchStr) {
            $scope.contacts = originalContacts.filter(function (contact) {
                var res = contact.name.indexOf(searchStr) != -1;
                return res;
            });
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
