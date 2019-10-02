var app = angular.module('myApp', ['ngRoute']); // Add modules into array
app.config(function($routeProvider) { // configure for routing
    $routeProvider.when("/", {
        templateUrl: "src/login.html",
        controller: "authController"
    }).when("/signUp", {
        templateUrl: "src/signUp.html",
        controller: "authController"
    })
});
app.controller('authController', function($scope, $http) {
    $scope.test="dddd"
    $scope.login = function() {
        if($scope.userId == 'abc' && $scope.password == '123') {
            // alert("Login success")
            window.location.href="/dashboard.html"
        }
    };
    $scope.signUp = function() {
        // store to db
        alert($scope.userId)
    }

    function getData() {
        $http.get('https://reqres.in/api/users?page=2').then(function(res){
            console.log('response ', res)
            $scope.data = res.data;
        })
    }
    getData()
})

