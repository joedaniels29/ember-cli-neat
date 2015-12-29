'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-neat',
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },
  
  
  included: function(app, parentAddon) {
     // see: https://github.com/ember-cli/ember-cli/issues/3718
      if (typeof app.import !== 'function' && app.app) {
        this.app = app = app.app;
      }
    },
  
  treeForStyles: function() {
     // see: https://github.com/ember-cli/ember-cli/issues/3718
    var app = this.app;
    if (typeof app.import !== 'function' && app.app) {
      app = this.app.app;
    }
    var neatPath = path.join(this.app.bowerDirectory, 'neat', 'app', 'assets', 'stylesheets');
    var neatTree = new Funnel(this.treeGenerator(neatPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });
    return neatTree;
  }
};
