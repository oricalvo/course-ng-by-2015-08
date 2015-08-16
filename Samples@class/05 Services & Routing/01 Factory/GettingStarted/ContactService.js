(function () {

    //function ContactServiceFactory() {
    //    console.log("contactService factory");

    //    var contacts = [
    //        { id: 1, name: "Ori" },
    //        { id: 2, name: "Roni" },
    //    ];

    //    return {
    //        getAll: function () {
    //            return contacts;
    //        },
    //        add: function (contact) {
    //            contacts.push(contact);
    //        }
    //    };
    //}

    //angular.module("MyApp").factory("contactService", ContactServiceFactory);

    function ContactService() {
        console.log("contactService factory");

        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    ContactService.prototype.getAll = function () {
        return this.contacts;
    }

    ContactService.prototype.add = function (contact) {
        this.contacts.push(contact);
    }

    angular.module("MyApp").service("contactService", ContactService);
})();
