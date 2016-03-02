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
  }.property('has_checked', 'answer_correct'),

  buttonText: function() {
    let button_text;

    switch (this.get('formStatus'))  {
      case 'answer-correct':
        button_text = 'Correct!';
        break;
      case 'answer-error':
        button_text = 'Incorrect :(';
        break;
      default:
        button_text = 'Check';
    }

    return button_text;
  }.property('formStatus')
});
