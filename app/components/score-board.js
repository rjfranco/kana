import Ember from 'ember';

export default Ember.Component.extend({
  correct: function() {
    return this.get('correct_answers') || 0;
  }.property('correct_answers'),

  incorrect: function() {
    return this.get('incorrect_answers') || 0;
  }.property('incorrect_answers')
});
