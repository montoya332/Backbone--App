/*global webApp, Backbone*/

webApp.Models = webApp.Models || {};

(function () {
  'use strict';

  webApp.Models.Blog = Backbone.Model.extend({

    url: '',

    initialize: function() {
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
