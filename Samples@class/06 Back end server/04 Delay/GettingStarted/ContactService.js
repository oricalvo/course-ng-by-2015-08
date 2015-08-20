(function () {

    angular.module("MyApp").factory("contactService", function ($http, $q) {
        var contacts = null;

        return {
            getAll: function () {

                if (contacts) {
                    console.log("FROM CACHE");

                    return $q.when(contacts);
                }

                function delay(p, timeout) {
                    var deferred = $q.defer();

                    console.log(p);

                    p.then(function (data) {
                        setTimeout(function () {
                            deferred.resolve(data);
                        }, timeout);
                    }).catch(function (err) {
                        deferred.reject(err);
                    });

                    return deferred.promise;
                }

                return delay($http.get("/contacts.html")
                    .then(function (response) {
                        return contacts = response.data;
                    }), 1500);

                //var deferred = $q.defer();

                //setTimeout(function () {
                //    deferred.resolve([{ id: 1, name: "Ori" }]);
                //}, 2500);

                //return deferred.promise;

                ////console.log("FROM SERVER");

                //return $http.get("/contacts.html")
                //    .then(function (response) {
                //        return contacts = response.data;
                //    });
            },
        };
    });

})();
