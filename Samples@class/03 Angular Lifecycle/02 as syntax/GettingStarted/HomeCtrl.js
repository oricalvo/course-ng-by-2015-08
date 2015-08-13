(function () {
    "use strict";

    function HomeCtrl() {
        this.message = "Hello Angular";

        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    HomeCtrl.prototype.add = function () {
        if (!this.name) {
            return;
        }

        var contact = {
            id: -1,
            name: this.name
        };

        this.contacts.push(contact);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
