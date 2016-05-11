define([

  'handlebars',

  'text!templates/view.hbs'

], function(Handlebars, SampleTemplateFile){

    

  return {

    SampleTemplate: Handlebars.compile(SampleTemplateFile)

  }

  

});