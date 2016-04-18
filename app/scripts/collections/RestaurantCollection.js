/*global webApp, Backbone*/

webApp.Collections = webApp.Collections || {};

(function () {
  'use strict';

  webApp.Collections.RestaurantCollection = Backbone.Collection.extend({

    model: webApp.Models.RestaurantCollection,

    initialize: function() {
      console.log('RestaurantCollection');
    },

  });

})();
