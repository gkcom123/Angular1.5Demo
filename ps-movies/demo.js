(function() {
    "use strict";

    var module = angular.module("psMovies");
    
    
    module.component("demo", {
        template: "Demo hai",
        bindings: {
        },
        controllerAs: "model",
        controller: function() {
            var model = this;
                       
            model.$onInit = function() {
                console.log("hi from demo");
//                model.entries = buildEntries(model.value, model.max);  
            };
            
        }        
    });

}());