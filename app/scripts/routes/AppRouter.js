/*global webApp, Backbone*/

define([
    'jquery',
    'backbone',
    'marionette',
    /**/
    'backboneApplication/RestaurantView',
    /* Marionette Application */
    'routes/AppRouterController',
    'orders/layout-view'

], function(
    $,
    Backbone,
    Marionette,
    /* Backbone Application */
    RestaurantView,
    /* Marionette Application */
    AppRouterController,
    OrdersView
) {

    'use strict';

    var Router = Backbone.Marionette.AppRouter.extend({
        controller: AppRouterController,
        appRoutes: {
            // '': 'showHomePage',
            '': 'showOrdersPage'
        },

        onRoute: function(name, path,arg) {console.log('onRoute',name)}
    });

    return Router;

});