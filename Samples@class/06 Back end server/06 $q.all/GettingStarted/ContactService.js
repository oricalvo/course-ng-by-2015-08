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
                var p1 = $http.get("/contacts.html");
                var p2 = $http.get("/roles.html");

                return $q.all([p1, p2]).then(function (res) {
                    var contacts = res[0].data;
                    var roles = res[1].data;

                    return mergeContactsAndUsers(contacts, roles);
                });
            },
        };
    });

})();
