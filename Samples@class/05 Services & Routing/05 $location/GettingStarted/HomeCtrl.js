(function () {
    "use strict";

    function HomeCtrl($scope, $location) {

        console.log($location.search());

        $scope.$watch(function () {
            return $location.url();
        }, function (newUrl, oldUrl) {
            if (newUrl == "/more") {
                $scope.showMore = true;
            }
        });

        $scope.change = function () {
            //window.location.assign("/xxx");

            //window.location.hash = "xxx";

            $location.url("a/b/c?id=123#blabla");
            //$location.search({ id: 123 });
            //$location.hash("blabla");
        }

        $scope.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
