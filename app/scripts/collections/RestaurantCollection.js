/*global webApp, Backbone*/

webApp.Collections = webApp.Collections || {};

(function () {
  'use strict';

  webApp.Collections.AnimalCollection = Backbone.Collection.extend({

    model: webApp.Models.AnimalCollection

  });

})();
