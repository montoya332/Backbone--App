define([

    'handlebars',
    'text!header/nav-template.hbs',
    'text!templates/main_layout_view.hbs',
    'text!orders/layout-template.hbs',
    'text!templates/view.hbs'

], function(Handlebars, NavTemplate, MainLayoutTemplate, OrdersTemplate,SampleTemplateFile) {

    return {
        NavTemplate: Handlebars.compile(NavTemplate),
        mainLayoutTemplate: Handlebars.compile(MainLayoutTemplate),
        OrdersTemplate: Handlebars.compile(OrdersTemplate),
        SampleTemplate: Handlebars.compile(SampleTemplateFile)
    }

});