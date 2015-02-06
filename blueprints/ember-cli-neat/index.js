module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function(options) {
    this.addBowerPackageToProject('bourbon', '3.2.4');
    this.addBowerPackageToProject('neat', '1.6.0');

  }
};
