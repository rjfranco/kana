import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return $.ajax('dictionary.json')
    .then(function(data) {
      let dictionary = window.ELECTRON ? JSON.parse(data) : data;
      return this.store.push(dictionary);
    }.bind(this));
  }
});
