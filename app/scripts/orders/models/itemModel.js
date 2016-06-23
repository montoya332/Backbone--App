define([
	'jquery',
	'backbone'
], function($, Backbone) {

	'use strict';
	var Model = Backbone.Model.extend({
		defaults: {
			title:'title',
			header:'header',
			subHeader:'subHeader'
		}
	});

	return Model;

});