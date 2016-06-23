define([
    'jquery',
    'backbone',
    'marionette',
    'handlebars',
    'templates/compiled-templates',
    'orders/views/itemView',
    'orders/collections/ordersCollection'

], function(
    $,
    Backbone,
    Marionette,
    handlebars,
    JST,
    ChildView,
    OrdersCollection
) {

    'use strict';

    var CompositeView = Marionette.CompositeView.extend({
        template: JST.OrdersCompositeViewTemplate,
        childView: ChildView,
        childViewContainer: 'ul',
        initialize: function(options) {
            options = options || {};
            this.collection =  new OrdersCollection({});
            this.render();
        },
    });

    return CompositeView;

});