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
        el: '#app-container',
        template: JST.mainLayoutTemplate,

        regions: {
            header: '.application__header',
            content: '.application__content',
            overlay: '.application__overlay'
        }
    });

    return mainLayoutView;

});