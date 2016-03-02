import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  pathForType: function(type) {
    if (window.ELECTRON) {
      return `${window.__dirname}/${type}.json`;
    }

    return `${type}.json`;
  }
});
