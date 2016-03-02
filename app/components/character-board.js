import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  classNames: ['character-board'],
  classNameBindings: ['sectionClass'],
  tagName: 'section',

  actions: {
    checkInput: function() {
      if(this.get('has_checked') && this.get('answer_correct')) {
        this.set('has_checked', undefined);
        this.set('answer_correct', undefined);
        this.set('last_update', Date.now());
        this.set('user_input', '');
      } else {
        this.set('has_checked', true);

        let answer_correct = this.get('user_input').toLowerCase() === this.get('expectedInput');
        this.set('answer_correct', answer_correct);

        if (answer_correct) {
          this.incrementProperty('correct_answers');
        } else {
          this.incrementProperty('incorrect_answers');
        }
      }
    }
  },

  last_update: Date.now(),

  currentItem: function() {
    if (this.get('last_update')) {
      let current_item = _.sample(this.get('section_list.[]').toArray());
      return current_item;
    }
  }.property('last_update', 'section_list.[]'),

  currentItemTest: function() {
    let test = `currentItem.${this.get('display')}`;
    return this.get(test);
  }.property('currentItem'),

  expectedInput: function() {
    return this.get('currentItem.roomaji');
  }.property('currentItem'),

  definition: function() {
    return this.get('currentItem.definition');
  }.property('currentItem'),

  formStatus: function() {
    if(this.get('has_checked')) {
      if(this.get('answer_correct')) {
        return 'answer-correct';
      } else {
        return 'answer-error';
      }
    }
  }.property('has_checked', 'answer_correct'),

  answeredCorrectly: function () {
    return this.get('formStatus') === 'answer-correct';
  }.property('formStatus'),

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
