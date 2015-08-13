/// <reference path="typings/angularjs/angular.d.ts" />
var HomeCtrl = (function () {
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
            name: this.name + "X"
        };
        this.contacts.push(contact);
    };
    return HomeCtrl;
})();
angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
//# sourceMappingURL=HomeCtrl.js.map