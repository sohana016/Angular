var app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl :"resource/login.html",
        controller :"authController"
    })
    .when("/signUp",{
        templateUrl :"resource/signUp.html",
        controller :"authController"
    })
});
    


app.controller ("authController", function($scope){
    $scope.login = function(){
        if($scope.userId == "mim" && $scope.password =="123"){
            // alert("Login Successfull")
            window.location.href="/homePage.html"
        }
    }
    $scope.signUp = function(){
        alert($scope.userId)

    }

});