(function () {
    "use strict";

    function HomeCtrl($scope, $injector, di, contactService) {

        $scope.message = "Hello Angular";

        $scope.add = function () {
            //angular.module("MyApp").value("dateFormat", "dd/MM/yyyy");

            require(["DateFormatService"], function () {
                di.value("dateFormat", "dd/MM/yyyy");
            });


            $injector.get("dateFormat");
        }

        $scope.contacts = contactService.getAll();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
