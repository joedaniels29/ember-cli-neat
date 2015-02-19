'use strict';
var path = require('path');

module.exports = {
  name: 'ember-neat',
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },
  treeForStyles: function(app) {
    var neatPath = path.join(app.bowerDirectory, 'neat', 'app', 'assets', 'stylesheets');
    var neatTree = this.pickFiles(this.treeGenerator(neatPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });
    return neatTree;
  }
};
