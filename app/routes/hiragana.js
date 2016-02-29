import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    fetch('/syllabaries.json')
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      this.store.push(json);
    }.bind(this));
  }
});
