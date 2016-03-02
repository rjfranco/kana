import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  pathForType: function(type) {
    if (window.ELECTRON) {
      let app = require('electron').remote.app;
      return `${app.getAppPath()}/public/${type}.json`;
    }

    return `${type}.json`;
  }
});
