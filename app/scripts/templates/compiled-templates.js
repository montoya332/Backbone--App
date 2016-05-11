define([

  'handlebars',
  'text!templates/main_layout_view.hbs',
  'text!templates/view.hbs'

], function(Handlebars, mainLayoutTemplate,SampleTemplateFile){

    

  return {
  	mainLayoutTemplate: Handlebars.compile(mainLayoutTemplate),
    SampleTemplate: Handlebars.compile(SampleTemplateFile)
  }

  

});