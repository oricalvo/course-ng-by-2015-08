(function () {
    "use strict";

    function HomeCtrl($scope) {

        $scope.getData = function () {
            $.ajax({
                url: "/contacts.html",
                type: "GET",
                dataType: "json",
                success: function (contacts) {
                    $scope.contacts = contacts;

                    $scope.$apply();
                },
                error: function () {
                    console.log("ERROR");
                }
            });
        }

        $scope.contacts = [];
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
