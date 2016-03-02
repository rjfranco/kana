import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  actions: {
    checkInput: function() {
      this.sendAction('continue');
    }
  },

  positiveReinforcement: function() {
    return _.sample([
      'Nice!',
      'Awesome!',
      'Good job!',
      'Brilliant!',
      'Stupendous!',
      'Phenomenal',
      'You Rock!'
    ]);
  }.property('formStatus')
});
