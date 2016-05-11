define(['marionette', 'routes/AppRouter'], function(Marionette, AppRouter) {
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
        var RegionContainer = Marionette.LayoutView.extend({
            el: '#app-container',

            regions: {
                header: '#header-region',
                main: '#main-region',
                dialog: '#dialog-region'
            }
        });

        WebApp.regions = new RegionContainer();
        WebApp.regions.dialog.onShow = function(view) {
            var self = this;
            var closeDialog = function() {
                self.stopListening();
                self.empty();
                self.$el.dialog('destroy');
            };

            this.listenTo(view, 'dialog:close', closeDialog);

            this.$el.dialog({
                modal: true,
                title: view.title,
                width: 'auto',
                close: function(e, ui) {
                    closeDialog();
                }
            });
        };
    });

    WebApp.on('start', function() {
        if (Backbone.history) {

            /*  Initialize routing, need to have global access to the Router  */
            webApp.Routers = new AppRouter();

            /*  Start Backbone.history()  */
            Backbone.history.start({
                pushState: true
            });
            if (WebApp.getCurrentRoute() === '') {}

        }
    });

    return WebApp;
});