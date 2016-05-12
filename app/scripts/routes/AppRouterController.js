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
            webApp.Views.appView = new RestaurantView({});
        },
        showOrdersPage: function() {
            console.log("showOrdersPage");
            webApp.Views.appView = new OrdersView({});
            webApp.Views.appView.render()
        }
    };
    return RouterController;

});