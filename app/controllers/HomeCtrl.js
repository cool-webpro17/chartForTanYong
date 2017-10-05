(function () {
    'use strict';

    var m = angular.module("HomeCtrl", []);

    var homeControllerFunction = function ($location, $rootScope, $routeParams, $scope) {

        $scope.init = function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        };

        $scope.chartDatas = [
            {
                "FIELD1": "Individual email in series",
                "FIELD2": "Open rate",
                "FIELD3": "Click rate",
                "FIELD4": "Revenue per recipeint"
            },
            {
                "FIELD1": "1",
                "FIELD2": "52.52%",
                "FIELD3": "11.00%",
                "FIELD4": "$8.65 "
            },
            {
                "FIELD1": "2",
                "FIELD2": "43.58%",
                "FIELD3": "10.06%",
                "FIELD4": "$5.55 "
            },
            {
                "FIELD1": "3",
                "FIELD2": "39.70%",
                "FIELD3": "8.78%",
                "FIELD4": "$3.19 "
            },
            {
                "FIELD1": "4",
                "FIELD2": "35.25%",
                "FIELD3": "6.98%",
                "FIELD4": "$3.89 "
            },
            {
                "FIELD1": "5",
                "FIELD2": "30.69%",
                "FIELD3": "5.86%",
                "FIELD4": "$1.31 "
            },
            {
                "FIELD1": "6",
                "FIELD2": "29.36%",
                "FIELD3": "5.30%",
                "FIELD4": "$1.26 "
            },
            {
                "FIELD1": "7",
                "FIELD2": "27.28%",
                "FIELD3": "4.22%",
                "FIELD4": "$1.89 "
            }
        ];

        $scope.init();
    };

    m.controller('HomeController', [
        '$location',
        '$rootScope',
        '$routeParams',
        '$scope',
        homeControllerFunction
    ]);
})();
