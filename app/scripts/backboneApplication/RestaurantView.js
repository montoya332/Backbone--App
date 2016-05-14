/*global webApp, Backbone, JST*/


define([
    'jquery',
    'backbone',
    'handlebars',
    'templates/compiled-templates',
    'backboneApplication/Restaurant',
    'backboneApplication/RestaurantCollection'
], function(
    $,
    Backbone,
    handlebars,
    JST,
    RestaurantModel,
    RestaurantCollection
) {

    'use strict';

    var RestaurantView = Backbone.View.extend({
        template: JST.SampleTemplate,

        tagName: 'div',

        //el: '.application__content',

        className: '',

        events: {},

        initialize: function() {
            this.model = new RestaurantModel();
            this.collection = new RestaurantCollection()
            this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

    return RestaurantView;

});