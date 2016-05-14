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

    var headerView = Marionette.LayoutView.extend({
        template: JST.NavTemplate,
        regions: {
            navDesktop: '#nav-desktop',
            navMobile: '#nav-mobile'
        },
        initialize: function() {console.log('headerView')}
    });

    return headerView;

});