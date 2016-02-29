import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
  lastUpdate: Date.now(),

  currentCharacter: function() {
    return _.sample(this.get('model'));
  }.property('lastUpdate')
});
