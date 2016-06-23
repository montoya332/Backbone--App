define([
    'jquery',
    'backbone',
    'marionette',
    'handlebars',
    'templates/compiled-templates',

], function(
    $,
    Backbone,
    Marionette,
    handlebars,
    JST
) {

    'use strict';

    var ItemView = Marionette.ItemView.extend({
        template: JST.OrdersItemViewTemplate,
        tagName: 'li',
        className: ' collection-item avatar',
    });

    return ItemView;

});