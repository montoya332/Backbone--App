/*global webApp, Backbone*/

define([
    'jquery',
    'backbone',
    'marionette',
    /**/
    'views/RestaurantView',
    'models/Restaurant',
    'collections/RestaurantCollection',

], function(
    $,
    Backbone,
    Marionette,
    /**/
    RestaurantView,
    RestaurantModel,
    RestaurantCollection
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
            webApp.Views.appView = new RestaurantView({
                model: new RestaurantModel(),
                collection: new RestaurantCollection()
            });

        }

    });

    return Router;

});