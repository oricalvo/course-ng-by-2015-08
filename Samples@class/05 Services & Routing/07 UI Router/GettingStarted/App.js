angular.module("MyApp", ["ui.router"]).config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "/Home.html",
            controller: "HomeCtrl",
        })
        .state('home.sub1', {
            url: "/sub1",
            templateUrl: "/HomeSub1.html",
        })
        .state('about', {
            url: "/about",
            templateUrl: "/About.html",
            controller: "AboutCtrl",
        });

    //$routeProvider
    //    .when("/", {
    //        templateUrl: "/Home.html",
    //        controller: "HomeCtrl",
    //    })
    //    .when("/about", {
    //        templateUrl: "/About.html",
    //        controller: "AboutCtrl",
    //    })
    //    .otherwise({
    //        redirectTo: "/",
    //    });
});

