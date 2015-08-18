angular.module("MyApp").config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

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
});
