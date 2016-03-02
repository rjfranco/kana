import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
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
