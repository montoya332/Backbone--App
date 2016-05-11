/*global webApp, Backbone, JST*/


define([
    'jquery',
    'backbone',
    'handlebars',
    'templates/compiled-templates'
], function(
    $,
    Backbone,
    handlebars,
    JST
) {

    'use strict';

    var RestaurantView = Backbone.View.extend({
        template: JST.SampleTemplate,

        tagName: 'div',

        el: '#main-container',

        className: '',

        events: {},

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            console.log('RestaurantView');
        }

    });

    return RestaurantView;

});