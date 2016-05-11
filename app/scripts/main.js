/*global webApp, $*/

require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        'backbone.picky': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
        materialize: '../bower_components/Materialize/dist/js/materialize',
        handlebars: '../bower_components/handlebars/handlebars',
        text: '../bower_components/text/text'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        }
    },
    waitSeconds: 200
});


require(['jquery', 'underscore', 'backbone', 'app'],
    function($, _, Backbone, WebApp) {

        'use strict';
        console.log('webApp', webApp);
        /*  Initialize the application view  */
        WebApp.start();
        
    });

(function() {

    window.webApp = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},
        Globals: {},
        init: function() {}
    };

})();