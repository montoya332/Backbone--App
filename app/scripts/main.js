/*global webApp, $*/


window.webApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Globals:{},
  init: function () {
    'use strict';

    /*  Initialize the application view  */
    var appView = new this.Views.RestaurantView({ 
                    model     : new this.Models.Restaurant(), 
                    collection: new this.Collections.RestaurantCollection() 
                  });

    /*  Initialize routing, need to have global access to the Router  */
    webApp.Globals.router = new this.Routers.MainRouter();
    
    /*  Start Backbone.history()  */
    Backbone.history.start({ pushState: true });
  }
};

$(document).ready(function () {
  'use strict';
  webApp.init();
});
