(function () {

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

    var provider = {
        $get: function () {
            return new ContactService();
        },
        enableCaching: function (enabled) {
            console.log("enableCaching: " + enabled);
        }
    };

    angular.module("MyApp").provider("contactService", provider);
})();
