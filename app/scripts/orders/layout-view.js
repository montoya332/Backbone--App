define([
	'jquery',
	'backbone',
	'marionette',
	'handlebars',
	'templates/compiled-templates',
	'orders/views/compositeView'
], function(
	$,
	Backbone,
	Marionette,
	handlebars,
	JST,
	OrdersCompositeView
) {

	'use strict';

	var mainLayoutView = Marionette.LayoutView.extend({
		//el: '.application__content',
		template: JST.OrdersTemplate,

		regions: {
			header: '.header',
			mainContent: '.mainContent',
			footer: '.footer'
		},
		initialize: function(options) {
			this.render();


		},
		onRender: function() {
			this.showOrdersList();
		},
		showOrdersList: function() {
			window.test = this;
			this.mainContent.show(new OrdersCompositeView({}))
		},
	});

	return mainLayoutView;

});