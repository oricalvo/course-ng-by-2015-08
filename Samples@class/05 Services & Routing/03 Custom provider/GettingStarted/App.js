angular.module("MyApp", [])
    .value("dateFormat", "dd/MM/yyyy")
    .config(function (contactServiceProvider) {
        console.log("config");

        contactServiceProvider.enableCaching(true);
    })
    .run(function (contactService) {
        console.log("run");
    });


