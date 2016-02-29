import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return fetch('/syllabaries.json')
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      return this.store.push(json);
    }.bind(this));
  }
});
