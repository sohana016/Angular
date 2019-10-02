var dashApp = angular.module('dashApp', ['ngRoute']);
dashApp.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "src/listProduct.html",
        controller: "productController"
    }).when("/addProduct", {
        templateUrl: "src/addProduct.html",
        controller: "productController"
    })
})
dashApp.controller("productController", function($scope) {
    $scope.test = "Test";
})