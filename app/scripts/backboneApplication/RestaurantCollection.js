/*global webApp, Backbone*/

define([
    'jquery',
    'backbone',
    'backboneApplication/Restaurant'
], function(
    $,
    Backbone,
    RestaurantModel
) {

    'use strict';

    var RestaurantCollection = Backbone.Collection.extend({
        model: RestaurantModel,

        initialize: function() {}
    });

    return RestaurantCollection;

});
