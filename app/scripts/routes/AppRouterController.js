/*global webApp, Backbone*/

define([
    'jquery',
    'backbone',
    'marionette',
    /**/
    'backboneApplication/RestaurantView',
    'orders/layout-view'

], function(
    $,
    Backbone,
    Marionette,
    /* Backbone Application */
    RestaurantView,
    /* Marionette Application */
    OrdersView
) {

    'use strict';

    var RouterController = {
        showHomePage: function() {
            console.log("showHomePage");
            webApp.mainContainer.content.show(new RestaurantView({}));
        },
        showOrdersPage: function() {
            console.log("showOrdersPage");
            webApp.mainContainer.content.show(new OrdersView({}));
        }
    };
    return RouterController;

});