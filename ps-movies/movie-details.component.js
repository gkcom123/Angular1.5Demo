(function() {
    "use strict";

    var module = angular.module("psMovies");
    
    module.component("loginComp",{
        templateUrl: "/ps-movies/movie-details.component.html",
        controllerAs: "model",
       $routeConfig: [
            { path: "/profile", component:"mprofile", name: "Profile" },
            { path: "/detail", component:"heroList", name: "Details" }
        ],
        bindings: {
            "$router": "<"
        },        
        controller: function() {
            var model = this;
            model.goto = function()
            {
                model.$router.navigate(["Profile"]);
            }
            model.$routerOnActivate = function(next) {
                //model.id = next.param.id;
                console.log("IN Details");
            };
        }
    });
    module.component('heroList', {
    template:"This is hero list"
  });
    module.component("mprofile", {
       template: "This is the overview" 
    });
    

}());