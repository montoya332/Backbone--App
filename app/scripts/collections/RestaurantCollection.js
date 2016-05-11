/*global webApp, Backbone*/

define([
    'jquery',
    'backbone',
    'models/Restaurant'
], function(
    $,
    Backbone,
    RestaurantModel
) {

    'use strict';

    var RestaurantCollection = Backbone.Collection.extend({
        model: RestaurantModel, //TODO

        initialize: function() {
            console.log('RestaurantCollection');
        }
    });

    return RestaurantCollection;

});