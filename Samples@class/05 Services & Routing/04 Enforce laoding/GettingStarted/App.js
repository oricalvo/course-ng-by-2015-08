angular.module("MyApp", [])
    .value("dateFormat", "dd/MM/yyyy")
    .config(function ($locationProvider) {
        console.log("config");

        $locationProvider.html5Mode(true);
    })
    .run(function ($location) {
        console.log("run");
    });


