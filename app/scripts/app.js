define(['marionette', 'routes/AppRouter','marionetteApplication/main_layout_view','header/view'], function(Marionette, AppRouter, MainLayoutView, NavBarView) {
    var WebApp = new Marionette.Application();

    WebApp.navigate = function(route, options) {
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    WebApp.getCurrentRoute = function() {
        return Backbone.history.fragment
    };

    WebApp.startSubApp = function(appName, args) {
        var currentApp = appName ? WebApp.module(appName) : null;
        if (WebApp.currentApp === currentApp) {
            return;
        }

        if (WebApp.currentApp) {
            WebApp.currentApp.stop();
        }

        WebApp.currentApp = currentApp;
        if (currentApp) {
            currentApp.start(args);
        }
    };

    WebApp.on('before:start', function() {
        webApp.mainContainer = new MainLayoutView();
        webApp.mainContainer.render();
        webApp.mainContainer.header.show(new NavBarView());
    });

    WebApp.on('start', function() {
        if (Backbone.history) {
            /*  Initialize routing, need to have global access to the Router  */
            webApp.appRouter = new AppRouter({});

            /*  Start Backbone.history()  */
            Backbone.history.start({
                pushState: true
            });
        }
    });

    return WebApp;
});