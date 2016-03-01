import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['character-board', 'hiragana'],
  tagName: 'section',

  actions: {
    checkInput: function() {
      this.set('has_checked', true);
      this.set('answer_correct', this.get('user_input').toLowerCase() === this.get('expected_input'));
    }
  },

  formStatus: function() {
    if(this.get('has_checked')) {
      if(this.get('answer_correct')) {
        return 'answer-correct';
      } else {
        return 'answer-error';
      }
    }
  }.property('has_checked', 'answer_correct')
});
