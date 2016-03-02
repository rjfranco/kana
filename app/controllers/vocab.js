import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
  last_update: Date.now(),

  currentWord: function() {
    return _.sample(this.get('model'));
  }.property('last_update')
});
