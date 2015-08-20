(function () {

    angular.module("MyApp").factory("contactService", function ($http) {
        return {
            getAll: function () {
                return $http.get("/contacts.html")
                    .then(function (response) {
                        return response.data;
                    });
            },
        };
    });

})();
