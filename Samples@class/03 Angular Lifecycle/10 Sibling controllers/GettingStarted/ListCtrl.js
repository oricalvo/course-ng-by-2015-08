(function () {
    "use strict";

    function ListCtrl($scope) {

        $scope.contacts = [];

        $scope.$on("contactAdded", function (e, contact) {
            $scope.contacts.push(contact);
        });
    }

    angular.module("MyApp").controller("ListCtrl", ListCtrl);
})();

