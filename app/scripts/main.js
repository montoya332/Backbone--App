/*global webApp, $*/

require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        materialize: '../bower_components/Materialize/dist/js/materialize',
        handlebars: '../bower_components/handlebars/handlebars',
        text: '../bower_components/text/text'
    },
    shim: {},
    waitSeconds: 200
});

require(['jquery', 'underscore', 'backbone', 'views/RestaurantView', 'models/Restaurant', 'collections/RestaurantCollection','routes/Restaurant_Routes'],
    function($, _, Backbone, RestaurantView, RestaurantModel, RestaurantCollection,MainRouter) {

        'use strict';
        console.log('webApp', webApp);
        /*  Initialize the application view  */
        webApp.Views.appView = new RestaurantView({
            model: new RestaurantModel(),
            collection: new RestaurantCollection()
        });

        /*  Initialize routing, need to have global access to the Router  */
        webApp.Routers = new MainRouter();

        /*  Start Backbone.history()  */
        Backbone.history.start({
            pushState: true
        });
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