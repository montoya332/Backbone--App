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

    var mainLayoutView = Marionette.LayoutView.extend({
        //el: '.application__content',
        template: JST.OrdersTemplate,

        regions: {
            orders: '.collection'
        }
    });

    return mainLayoutView;

});