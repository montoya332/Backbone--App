define([

    'handlebars',
    'text!header/nav-template.hbs',
    'text!templates/main_layout_view.hbs',
    'text!templates/view.hbs'

], function(Handlebars, NavTemplate, MainLayoutTemplate, SampleTemplateFile) {

    return {
        NavTemplate: Handlebars.compile(NavTemplate),
        mainLayoutTemplate: Handlebars.compile(MainLayoutTemplate),
        SampleTemplate: Handlebars.compile(SampleTemplateFile)
    }

});