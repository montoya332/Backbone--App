/*global webApp, Backbone, JST*/

webApp.Views = webApp.Views || {};

(function () {
  'use strict';

  webApp.Views.AnimalView = Backbone.View.extend({

    template: JST['app/scripts/templates/RestaurantView.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

})();
