(function()
{
    "use strict";

    var module = angular.module("psMovies");
    module.component("profile", {
       template: "This is the profileChild" ,
       $routeConfig: [
            { path: "/profilec", component:"profileCnn", name: "Profilecnn" }
        ],        

    });
    module.component("profileCnn", {
       template: "This is the profileCnn"       

    });

}());
