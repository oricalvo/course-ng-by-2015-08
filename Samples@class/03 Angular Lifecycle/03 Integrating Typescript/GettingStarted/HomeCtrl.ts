/// <reference path="typings/angularjs/angular.d.ts" />

class HomeCtrl {
    message: string;
    name: string;
    contacts: Contact[];

    constructor() {
        this.message = "Hello Angular";

        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    add () {
        if (!this.name) {
            return;
        }

        var contact = {
            id: -1,
            name: this.name + "X"
        };

        this.contacts.push(contact);
    }
}

interface Contact {
    id: number;
    name: string;
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
