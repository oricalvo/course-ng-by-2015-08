(function () {

    angular.module("MyApp").factory("contactService", function ($http, $q) {
        function mergeContactsAndUsers(contacts, roles) {
            var res = [];

            for (var i = 0; i < Math.min(contacts.length, roles.length) ; i++) {
                res.push({
                    id: contacts[i].id,
                    name: contacts[i].name,
                    role: roles[i].role,
                });
            }

            return res;
        }

        return {
            getAll: function () {
                var deferred = $q.defer();
                var contacts;
                var roles;
                var counter = 0;

                $http.get("/contacts.html")
                    .then(function (response) {
                        contacts = response.data;
                        if (++counter == 2) {
                            deferred.resolve(mergeContactsAndUsers(contacts, roles));
                        }
                    })
                    .catch(function (err) {
                        deferred.reject(err);
                    });

                $http.get("/roles.html")
                    .then(function (response) {
                        roles = response.data;
                        if (++counter == 2) {
                            deferred.resolve(mergeContactsAndUsers(contacts, roles));
                        }
                    })
                    .catch(function (err) {
                        deferred.reject(err);
                    });

                return deferred.promise;
            },
        };
    });

})();
