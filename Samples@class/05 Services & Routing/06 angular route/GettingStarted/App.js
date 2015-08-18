angular.module("MyApp", ["ngRoute"]).config(function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);

    $routeProvider
        .when("/", {
            templateUrl: "/Home.html",
            controller: "HomeCtrl",
        })
        .when("/about", {
            templateUrl: "/About.html",
            controller: "AboutCtrl",
        })
        .otherwise({
            redirectTo: "/",
        });
});

