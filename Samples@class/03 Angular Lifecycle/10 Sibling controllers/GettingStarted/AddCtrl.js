(function () {
    "use strict";

    function AddCtrl($scope, $rootScope) {
        $scope.add = function () {
            if (!$scope.name) {
                return;
            }

            var contact = { id: -1, name: $scope.name };
            
            $rootScope.$broadcast("contactAdded", contact);
        }
    }

    angular.module("MyApp").controller("AddCtrl", AddCtrl);
})();

