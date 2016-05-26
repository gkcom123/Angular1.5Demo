(function() {
    "use strict";

    var module = angular.module("psMovies");

    

    function controller($http) {

        var model = this;
        //model.movies = [];

        model.$onInit = function() {
            console.log("IN init",model.$router);
        };
        
        model.goTo = function() {
            console.log("i m -",model.$router);
            model.$router.navigate(["Registration"]);
            //model.$router.navigate(["Details", {id:id}, "Overview"]);
        };
        model.gotoList = function()
                {
            console.log("i m here");
            model.$router.navigate(["Service"]);
            };
 
    }

    module.component("registerComp", {
        templateUrl: "/ps-movies/movie-list.component.html",
        controllerAs: "model",
        controller: ["$http", controller],
        $routeConfig: [
            { path: "/registrationchild", component:"regChild", name: "Registration" }
            // { path: "/cast", component:"movieCast", name: "Cast"},
            // { path: "/director", component:"movieDirector", name: "Director"}            
        ],
        bindings: {
            "$router": "<"
        }
    });
    module.component("regChild", {
       template: "This is the regChild" 
    });

} ());