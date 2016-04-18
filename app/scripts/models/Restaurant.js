/*global webApp, Backbone*/

webApp.Models = webApp.Models || {};

(function () {
  'use strict';

  webApp.Models.Restaurant = Backbone.Model.extend({

    url: '',

    initialize: function() {
      console.log('RestaurantModel');
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
