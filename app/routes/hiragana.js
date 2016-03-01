import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return $.ajax('syllabaries.json')
    .then(function(data) {
      return this.store.push(JSON.parse(data));
    }.bind(this));
  }
});
