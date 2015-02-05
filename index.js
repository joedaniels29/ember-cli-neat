'use strict';
var path = require('path');

module.exports = {
  name: 'ember-neat',
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },
  treeForStyles: function() {
    var neatPath = path.join(this.app.bowerDirectory, 'neat', 'dist');
    var neatTree = this.pickFiles(this.treeGenerator(bourbonPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });
    return bourbonTree;
  }
};
