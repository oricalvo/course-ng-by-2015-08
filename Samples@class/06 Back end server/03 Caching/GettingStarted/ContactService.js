(function () {

    angular.module("MyApp").factory("contactService", function ($http, $q) {
        var contacts = null;

        return {
            getAll: function () {

                if (contacts) {
                    console.log("FROM CACHE");

                    return $q.when(contacts);
                }

                console.log("FROM SERVER");

                return $http.get("/contacts.html")
                    .then(function (response) {
                        return contacts = response.data;
                    });
            },
        };
    });

})();
