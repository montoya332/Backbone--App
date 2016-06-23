define([
    'jquery',
    'backbone',
    'marionette',
    'handlebars',
    'templates/compiled-templates',
    'orders/models/itemModel'

], function(
    $,
    Backbone,
    Marionette,
    handlebars,
    JST,
    Model
) {

    'use strict';

    var Collection = Backbone.Collection.extend({
       model:Model, 
    });

    return Collection;

});