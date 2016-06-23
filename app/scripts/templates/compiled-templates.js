define([

    'handlebars',
    'text!header/nav-template.hbs',
    'text!templates/main_layout_view.hbs',
    'text!orders/layout-template.hbs',
    'text!templates/view.hbs',

    /* Orders */
    'text!orders/templates/compositeView.hbs',
    'text!orders/templates/itemView.hbs',

], function(Handlebars, NavTemplate, MainLayoutTemplate, OrdersTemplate,SampleTemplateFile, OrdersCompositeViewTemplate, OrdersItemViewTemplate) {

    return {
        NavTemplate: Handlebars.compile(NavTemplate),
        mainLayoutTemplate: Handlebars.compile(MainLayoutTemplate),
        OrdersTemplate: Handlebars.compile(OrdersTemplate),
        SampleTemplate: Handlebars.compile(SampleTemplateFile),
        /* Orders */
        OrdersCompositeViewTemplate: Handlebars.compile(OrdersCompositeViewTemplate),
        OrdersItemViewTemplate: Handlebars.compile(OrdersItemViewTemplate)
    }

});