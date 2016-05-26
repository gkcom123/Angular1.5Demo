(function() {
    "use strict";

    var module = angular.module("psMovies");
        function headerController() {
        var model = this;
        model.gotoList = function()
        {
            console.log("i m here");
            model.$router.navigate(["Service"]);
        }
        model.$onInit = function()
        {
            console.log("This is in main->",model.$route);
        }
    }
    module.component("movieApp", {
       templateUrl: "/ps-movies/movie-app.component.html",
       $routeConfig: [
           { path: "/register", component:"registerComp", name: "Register" },
           { path: "/login/...", component:"loginComp", name: "Login" },
           { path: "/services", component:"serviceComp", name: "Service" },
           { path: "/**", redirectTo: ["Register"] }
       ],
        controller:headerController,
        controllerAs:'model',
    });
    module.component("serviceComp", {
       template: "This is the serviceComp" 
    });

}());