import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return $.ajax('syllabaries.json')
    .then(function(data) {
      let kana = window.ELECTRON ? JSON.parse(data) : data;
      return this.store.push(kana);
    }.bind(this));
  }
});
