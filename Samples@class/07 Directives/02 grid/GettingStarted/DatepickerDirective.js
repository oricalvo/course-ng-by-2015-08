(function () {

    angular.module("MyApp").directive("datepicker", function () {

        return {
            restrict: "A",
            compile: function (element) {
                //element.datepicker();

                element.addClass("datepicker");

                return function postLink(scope, element) {
                    element.datepicker();
                }

                //return {
                //    pre: function () {
                //    },
                //    post: function () {
                //    }
                //};
            },
            //link: function (scope, element) {
            //    element.datepicker();
            //}
        };

    });

})();
