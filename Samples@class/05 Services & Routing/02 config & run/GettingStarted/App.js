angular.module("MyApp", [])
    .value("dateFormat", "dd/MM/yyyy")
    .config(function (contactServiceProvider) {
        console.log("config");
    })
    .run(function (contactService) {
        console.log("run");
    });


