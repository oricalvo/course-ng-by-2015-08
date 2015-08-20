angular.module("MyApp", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
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
    })
    .run(function ($rootScope, $location) {
        $rootScope.getState = function (name, key) {
            var search = $location.search();

            return search[key];
        }

        $rootScope.setState = function (stateName, key, value) {

            if (value == undefined) {
                value = key;
                key = stateName;
                stateName = undefined;
            }

            var search = $location.search();

            if (stateName) {
                search[stateName + ":" + key] = value;
            }
            else {
                search[key] = value;
            }

            $location.search(search);
        }
    });


