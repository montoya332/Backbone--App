/*global webApp, Backbone*/

define([
    'jquery',
    'backbone',
    'marionette',
    /**/
    'backboneApplication/RestaurantView',

], function(
    $,
    Backbone,
    Marionette,
    /* Backbone Application */
    RestaurantView
    /* Marionette Application */
) {

    'use strict';

    var Router = Marionette.AppRouter.extend({

        appRoutes: {},

        /* standard routes can be mixed with appRoutes/Controllers above */
        routes: {
            "": "showHomePage"
        },
        showHomePage: function() {
            console.log("showHomePage");
            webApp.Views.appView = new RestaurantView({});
        }

    });

    return Router;

});