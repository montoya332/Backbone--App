/*global webApp, Backbone*/
define([
    'jquery',
    'backbone'

], function(
    $,
    Backbone
) {

    'use strict';

    var Restaurant = Backbone.Model.extend({
        url: '',

        initialize: function() {
            console.log('RestaurantModel');
        },

        defaults: {},

        validate: function(attrs, options) {},

        parse: function(response, options) {
            return response;
        }
    });

    return Restaurant;

});