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
        el: '.application__header',
        template: JST.NavTemplate,

        regions: {
            navDesktop: '#nav-desktop',
            navMobile: '#nav-mobile'
        },
        initialize: function() {console.log('adsfasfsdfs', this.$el)}
    });

    return mainLayoutView;

});